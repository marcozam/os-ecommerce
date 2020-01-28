import { Validators } from '@angular/forms';
import { IPersona } from 'models/general';

export interface IAlumno {
  matricula: any;
  gradoId: any;
}

export interface IAlumnoFullForm {
  alumno: IAlumno;
  datosPersonales: IPersona;
}

export const ALUMNO_FORM = (): IAlumno => {
  const fields = {
    matricula: ['', Validators.required],
    gradoId: [0, Validators.required],
  };
  return fields;
};
