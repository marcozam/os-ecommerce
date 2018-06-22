import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store
import { reducers } from './reducers';
import { effects } from './effects';
// Services
import { services } from 'app/services/productos';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', { ...reducers }),
    EffectsModule.forFeature([...effects])
  ],
  providers: [
    ...services
  ],
  declarations: []
})
export class ProductosStoreModule { }
