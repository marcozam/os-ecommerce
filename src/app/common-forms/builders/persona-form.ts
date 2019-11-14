import { Validators } from '@angular/forms';
import { IPersona } from 'models';

export function PERSONA_FORM(optionals = false): IPersona {
  const optinalFields = {
    fechaNacimiento: [''], // Today - 18 years
    sexo: [1],
  };
  let fields = {
    nombre: ['', Validators.required, Validators.maxLength(50)],
    apellidoPaterno: ['', Validators.required, Validators.maxLength(50)],
    apellidoMaterno: ['', Validators.required, Validators.maxLength(50)],
  };
  if (optionals) {
    fields = { ...fields, ...optinalFields };
  }
  return fields;
}
