import {
    ValidationErrors,
    AbstractControl,
    Validators
} from '@angular/forms';

export function emailOrEmpty(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
}
