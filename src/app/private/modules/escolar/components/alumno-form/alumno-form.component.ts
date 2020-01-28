import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
// Models
import { Alumno } from 'models/escolar';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlumnoFormComponent extends OSBaseFormComponent<Alumno> {

  /*
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
  */

  constructor() { super(); }
}
