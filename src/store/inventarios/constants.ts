import { createFeatureSelector } from '@ngrx/store';
// States
import { TiposMovimientoInventarioState } from './tipos-movimiento/tipos-movimiento.entities';
import { InventarioState } from './movimientos/movimientos.entities';

export interface InventarioModuleState {
  tiposMovimientos: TiposMovimientoInventarioState;
  inventario: InventarioState;
}

export const namespace = '[Inventarios]';
export const featureName = 'inventarios';
export const getInventariosModuleState = createFeatureSelector<InventarioModuleState>(featureName);
