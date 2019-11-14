import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store
// import { reducers } from './reducers';
import { effects } from './effects';
import { featureName } from './constants';

@NgModule({
  imports: [
    // StoreModule.forFeature(featureName, { ...reducers }),
    EffectsModule.forFeature([...effects])
  ],
  declarations: []
})
export class BaseCatalogsStoreModule { }
