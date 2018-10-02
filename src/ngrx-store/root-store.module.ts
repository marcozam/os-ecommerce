import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Modules
import { ProductosStoreModule } from './productos-store';
// Router
import * as fromRouterState from './state/router.state';
// Effects
import { GlobalEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      ...fromRouterState.routerReducers
    }),
    EffectsModule.forRoot([ GlobalEffects ]),
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
