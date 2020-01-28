import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// Common
import { OSActions } from 'app/common';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/auth';
// Services
import { LOGIN_FORM } from '../login-form/login-form.builder';
import { Login } from 'store/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form: FormGroup;
  loginActions: OSActions[] = [
    new OSActions('login', 'Iniciar Session', 'primary', false)
  ];

  constructor(private store$: Store<fromStore.AuthModuleState>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group(LOGIN_FORM());
  }

  onAction(actionName: string) {
    if (actionName === 'login') {
      this.store$.dispatch(Login({ payload: this.form.value}));
    }
  }
}
