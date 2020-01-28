import { Validators } from '@angular/forms';

export interface ILoginForm {
  userName: any;
  password: any;
}

export const LOGIN_FORM = (): ILoginForm => {
  return {
    userName: ['', Validators.required],
    password: ['', Validators.required],
  };
};
