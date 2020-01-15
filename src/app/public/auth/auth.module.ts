import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// Routing
import { AuthRoutingModule } from './routing/auth-routing.module';
// Componets
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
// Modules
import { BaseModule } from 'app/modules/base/base.module';
// Services
import { OSAuthService } from 'services/http/auth';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    BaseModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    OSAuthService
  ]
})
export class AuthModule { }
