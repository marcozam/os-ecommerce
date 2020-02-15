import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName } from './constants';
// Services
import { InventarioService, MovimientosInventarioService } from 'services/http/inventarios';

import { TiposMovimientoInventarioEffects, tiposMovimientoReducer } from './tipos-movimiento';
import { MovimientosInventarioEffects, movimientosReducer } from './movimientos';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, {
      tiposMovimientos: tiposMovimientoReducer,
      inventario: movimientosReducer,
    }),
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

