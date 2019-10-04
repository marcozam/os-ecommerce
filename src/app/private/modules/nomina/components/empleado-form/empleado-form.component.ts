import { Component, Input } from '@angular/core';
// Models
import { Empleado, Empresa } from 'models';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss']
})
export class EmpleadoFormComponent extends OSBaseFormComponent<Empleado> {
  @Input() patrones: Empresa[];
  constructor() { super(); }
}
