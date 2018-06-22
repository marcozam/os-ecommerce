import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Modules
import { ProductosStoreModule } from './productos-store';
// Store
import * as fromReducers from './reducers';
import * as fromEffects from './effects';
// Router
import * as fromRouterState from './state/router.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      ...fromRouterState.routerReducers,
      ...fromReducers.reducers
    }),
    EffectsModule.forRoot([
      ...fromEffects.effects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
    StoreRouterConnectingModule,
    ProductosStoreModule,
  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: fromRouterState.CustomSerializer},
  ]
})
export class RootStoreModule { }
