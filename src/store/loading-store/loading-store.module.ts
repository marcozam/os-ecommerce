import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store
import { reducer } from './reducers/loading.reducer';
import { effects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('loading', reducer ),
    EffectsModule.forFeature([...effects])
  ],
  declarations: []
})
export class LoadingStoreModule { }
