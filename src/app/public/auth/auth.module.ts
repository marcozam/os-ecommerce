import { NgModule } from '@angular/core';
// Common
import { OSCommonModule } from 'app/common/common.module';
// Routing
import { AuthRoutingModule } from './routing/auth-routing.module';
// Componets
import * as components from './components';

@NgModule({
  imports: [
    OSCommonModule,
    AuthRoutingModule,
  ],
  declarations: [
    components.LoginComponent,
    components.SignupComponent,
    components.LoginFormComponent,
  ],
})
export class AuthModule { }
