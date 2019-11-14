import { Component, Input } from '@angular/core';
// Models
import { Empresa, RelacionLaboral } from 'models';
// Core
import { PERIODOS_TIEMPO } from 'core/constants';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'os-relacion-laboral-form',
  templateUrl: './relacion-laboral-form.component.html',
})
export class RelacionLaboralFormComponent extends OSBaseFormComponent<RelacionLaboral> {
  @Input() patrones: Empresa[];
  periocidadPago = PERIODOS_TIEMPO;
  constructor() { super(); }
}
