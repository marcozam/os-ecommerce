import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
// Models
import { FormSaveEvent } from 'app/models';

@Component({
  selector: 'os-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnInit {

  @Input() loading$: Observable<boolean>;
  @Input() item$: Observable<any>;
  @Input() form: FormGroup;
  @Input() title: string;
  @Output() onSaveFired = new EventEmitter<FormSaveEvent<any>>();

  constructor() { }

  ngOnInit() {
    // When is loading all fields are disabled
    this.loading$.subscribe(loading => loading ? this.form.disable() : this.form.enable());
    // Listen for changes
    const subs = this.item$.subscribe(data => {
      if (data.key > 0) {
        this.form.patchValue({ ...data });
        if (subs) { subs.unsubscribe(); }
      }
    });
  }

  onSaveClick(newValue: any) {
    if (this.form.invalid) { return; }
    this.item$.pipe(take(1))
      .subscribe(old => {
        this.onSaveFired.emit({ new: {...old, ...newValue}, old });
      });
  }
}
