import { Validators } from '@angular/forms';
import { IPersona } from 'models/general';
import { TIPO_TUTOR } from '../../contants';

export interface ITutor {
  tipoId: any;
}

export interface ITutorFullForm {
  tutor: ITutor;
  datosPersonales: IPersona;
}

export const TUTOR_FORM = (): ITutor => {
  const fields = {
    tipoId: [TIPO_TUTOR.Madre, Validators.required]
  };
  return fields;
};
