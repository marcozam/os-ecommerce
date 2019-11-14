import { Component, Input } from '@angular/core';
// Models
import { Empresa, Empleado, RelacionLaboral } from 'models';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';
import { IEmpleadoFullForm } from '../../constants';
import { STATUS_KEY } from 'core/constants';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
})
export class EmpleadoFormComponent extends OSBaseFormComponent<Empleado> {
  @Input() patrones: Empresa[];

  formatValue(value: Empleado): IEmpleadoFullForm {
    const { datosPersonales, NSS, relacionesLaborales } = value;
    const relacionesActivas = relacionesLaborales.filter(r => r.statusId === STATUS_KEY.RelacionActiva);
    const relacionLaboral = relacionesActivas.length > 0 ? relacionesActivas[0] : new RelacionLaboral();
    return {
      empleado: { NSS },
      datosPersonales,
      relacionLaboral
    };
  }

  constructor() { super(); }
}
