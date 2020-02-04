import { Validators } from '@angular/forms';
import { IEmpresa } from 'models';

export const EMPRESA_FORM = (): IEmpresa => {
  return {
    nombre: ['', Validators.required]
  };
};
