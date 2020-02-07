import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms';
// Models
import { Contacto, TipoDatosContacto } from 'models/crm';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
})
export class ContactoFormComponent extends OSBaseFormComponent<Contacto> {

  @Input() tiposDatos: TipoDatosContacto[];

  constructor() { super(); }

  addField(tipo: TipoDatosContacto) {
    // this.fields.push(this.setField(tipo));
  }

}
