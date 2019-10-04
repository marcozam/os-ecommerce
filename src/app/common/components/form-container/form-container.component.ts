import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
// import { Observable } from 'rxjs';
import { OSActions } from '../../models';
import { defaultFormActions } from '../../constants';

@Component({
  selector: 'os-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  host: { class: 'start-xs' }
})
export class FormContainerComponent implements OnInit {

  @Input() title: string;
  @Input() actions: OSActions[] = defaultFormActions;
  @Output() actionTriggered: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  performAction(action: string) {
    this.actionTriggered.emit(action);
  }
}
