import { Validators } from '@angular/forms';
import { IPersona } from 'models';

export function PERSONA_FORM(optionals = false): IPersona {
  const optinalFields = {
    fechaNacimiento: [''], // Today - 18 years
    sexo: [1],
  };
  let fields = {
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
  };
  if (optionals) {
    fields = { ...fields, ...optinalFields };
  }
  return fields;
}
