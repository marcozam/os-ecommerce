import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store
import { reducers } from './reducers';
import { effects } from './effects';
import { featureName } from './constants';
// Services
import { services } from 'services/http/productos';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, { ...reducers }),
    EffectsModule.forFeature([...effects])
  ],
  providers: [
    ...services
  ],
  declarations: []
})
export class ProductosStoreModule { }
