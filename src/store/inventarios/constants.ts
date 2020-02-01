import { createFeatureSelector } from '@ngrx/store';
// States
import { TiposMovimientoInventarioState } from './tipos-movimiento/tipos-movimiento.entities';
import { MovimientosInventarioState } from './movimientos/movimientos.entities';

export interface InventarioModuleState {
  tiposMovimientos: TiposMovimientoInventarioState;
  movimientos: MovimientosInventarioState;
}

export const namespace = '[Inventarios]';
export const featureName = 'inventarios';
export const getInventariosModuleState = createFeatureSelector<InventarioModuleState>(featureName);
