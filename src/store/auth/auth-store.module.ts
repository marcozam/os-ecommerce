import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName } from './constants';
// Services
import { AuthService } from 'services/http/auth';

import { reducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    AuthService
  ],
})
export class AuthStoreModule { }
