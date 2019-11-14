import { Component, Input } from '@angular/core';
// Models
import { Empleado, Empresa } from 'models';
// Core
import { PERIODOS_TIEMPO } from 'core/constants';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss']
})
export class EmpleadoFormComponent extends OSBaseFormComponent<Empleado> {
  @Input() patrones: Empresa[];
  periocidadPago = PERIODOS_TIEMPO;
  constructor() { super(); }
}
