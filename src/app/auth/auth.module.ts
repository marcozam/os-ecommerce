import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// Routing
import { AuthRoutingModule } from './auth-routing.module';
// Componets
import {
  AuthLayoutComponent,
  LoginComponent,
  SignupComponent,
} from './components';
// Services
import { OSAuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    OSAuthService
  ]
})
export class AuthModule { }
