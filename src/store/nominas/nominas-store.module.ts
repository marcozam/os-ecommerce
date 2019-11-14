import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store
// import { reducers } from './reducers';
import { effects } from './effects';

@NgModule({
  imports: [
    // StoreModule.forFeature('products', { ...reducers }),
    EffectsModule.forFeature([...effects])
  ],
  declarations: []
})
export class NominasStoreModule { }
