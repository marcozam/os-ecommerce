import { ValidationErrors, AbstractControl, Validators } from '@angular/forms';

export class OSValidators {
  static emailOrEmpty(control: AbstractControl): ValidationErrors | null {
      return control.value === '' ? null : Validators.email(control);
  }
}
