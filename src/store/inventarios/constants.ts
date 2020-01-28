import { createFeatureSelector } from '@ngrx/store';
// States
import { TiposMovimientoInventarioState } from './tipos-movimiento/tipos-movimiento.entities';

export interface InventarioModuleState {
  tiposMovimientos: TiposMovimientoInventarioState;
}

export const namespace = '[Inventarios]';
export const featureName = 'inventarios';
export const getInventariosModuleState = createFeatureSelector<InventarioModuleState>(featureName);
