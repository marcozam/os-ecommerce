import { NgModule } from '@angular/core';
// NgRx
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName, InventarioModuleState } from './constants';
// Services
import { InventarioService, MovimientosInventarioService } from 'services/http/inventarios';

import { TiposMovimientoInventarioState, TiposMovimientoInventarioEffects, tiposMovimientoReducer } from './tipos-movimiento';
import { MovimientosInventarioEffects, movimientosReducer, InventarioState } from './movimientos';

const reducers: ActionReducerMap<InventarioModuleState> = {
  tiposMovimientos: (state: TiposMovimientoInventarioState, action: Action) => tiposMovimientoReducer(state, action),
  inventario: (state: InventarioState, action: Action) => movimientosReducer(state, action),
};

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([
      TiposMovimientoInventarioEffects,
      MovimientosInventarioEffects,
    ])
  ],
  providers: [
    InventarioService,
    MovimientosInventarioService,
  ],
})
export class InventariosStoreModule { }

