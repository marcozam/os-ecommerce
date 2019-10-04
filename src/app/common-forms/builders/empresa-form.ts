import { Validators } from '@angular/forms';
import { IEmpresa } from 'models';

export function EMPRESA_FORM(): IEmpresa {
  const fields = {
    nombre: ['', Validators.required]
  };
  return fields;
}
