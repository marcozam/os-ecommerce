import { Component, Input } from '@angular/core';
// Models
import { Tutor } from 'models/escolar';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'app-tutor-form',
  templateUrl: './tutor-form.component.html',
})
export class TutorFormComponent extends OSBaseFormComponent<Tutor> {
  constructor() { super(); }
}
