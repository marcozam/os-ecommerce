import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Modules
import { ProductosStoreModule } from './productos-store/productos-store.module';
// Router
import * as fromRouterState from './router-state';

@NgModule({
  imports: [
    CommonModule,
    ProductosStoreModule,
    StoreModule.forRoot({
      ...fromRouterState.routerReducers
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreRouterConnectingModule,
  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: fromRouterState.CustomSerializer},
  ]
})
export class RootStoreModule { }
