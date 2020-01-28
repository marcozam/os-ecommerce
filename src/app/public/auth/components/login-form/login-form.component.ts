import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
// Common forms
import { OSBaseFormComponent } from 'app/common-forms/components';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent extends OSBaseFormComponent<any> {

  @Input() showPassword = false;

  constructor() { super(); }
}
