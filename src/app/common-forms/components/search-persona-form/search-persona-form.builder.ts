import { Validators } from '@angular/forms';
import { NameValidatorDirective } from '../../validators';

export const SEARCH_PERSONA_FORM = (): { nombre: any } => {
  return {
    nombre: ['', [Validators.required, NameValidatorDirective] ]
  };
};
