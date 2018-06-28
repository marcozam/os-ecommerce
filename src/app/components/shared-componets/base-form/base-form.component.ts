import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
// Models
import { FormSaveEvent } from 'app/models';
import { take } from 'rxjs/operators';

@Component({
  selector: 'os-base-form',
  templateUrl: './base-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./base-form.component.scss']
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
    this.loading$.subscribe(loading => {
      loading ? this.form.disable() : this.form.enable();
    });
    // Listen for changes
    const subs = this.item$.subscribe(data => {
      if (data.key > 0) {
        this.form.patchValue({ ...data });
        subs.unsubscribe();
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
