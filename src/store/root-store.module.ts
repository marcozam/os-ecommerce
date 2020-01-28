import { NgModule } from '@angular/core';
// NgRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Modules
import { AuthStoreModule } from './auth/auth-store.module';
import { LoadingStoreModule } from './loading-store/loading-store.module';
import { BaseCatalogsStoreModule } from 'store/base-catalogs/base-catalog-store.module';
// Router
import * as fromRouterState from './state/router.state';
// Effects
import { GlobalEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forRoot({
      ...fromRouterState.routerReducers
    }),
    EffectsModule.forRoot([ GlobalEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
    StoreRouterConnectingModule.forRoot(),
    AuthStoreModule,
    LoadingStoreModule,
    BaseCatalogsStoreModule,
  ],
  declarations: [],
  providers: [
    { provide: RouterStateSerializer, useClass: fromRouterState.CustomSerializer},
  ]
})
export class RootStoreModule { }
