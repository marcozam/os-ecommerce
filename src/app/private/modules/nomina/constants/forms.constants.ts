import { Validators } from '@angular/forms';
import { PERIODO_TIEMPO_KEY, ONLY_NUMBERS_REGEX } from 'core/constants';
import { IPersona } from 'models';


export interface IEmpleadoForm {
  NSS: any;
}

export interface IRelacionLaboralForm {
  patronId: any;
  fechaIngreso: any;
  noEmpleado: any;
  periocidadPagoId: any;
}

export interface IEmpleadoFullForm {
  empleado: IEmpleadoForm;
  datosPersonales: IPersona;
  relacionLaboral: IRelacionLaboralForm;
}

export const EMPLEADO_FORM = (): IEmpleadoForm => {
  return {
    NSS: ['', [
        Validators.required,
        Validators.maxLength(11),
        Validators.pattern(ONLY_NUMBERS_REGEX)
      ]
    ],
  };
};

export const RELACION_LABORAL_FORM = (): IRelacionLaboralForm => {
  return {
    patronId: [0, Validators.required],
    fechaIngreso: [new Date(), Validators.required],
    noEmpleado: [''],
    periocidadPagoId: [PERIODO_TIEMPO_KEY.Quincenal, Validators.required],
  };
};
