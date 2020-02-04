import { Component, ChangeDetectionStrategy } from '@angular/core';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms';
// Models
import { Contacto } from 'models/crm';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoFormComponent extends OSBaseFormComponent<Contacto> {
  constructor() { super(); }
}
