
import { createSelector } from '@ngrx/store';
import { getInventariosModuleState, InventarioModuleState } from '../constants';

export const selectMovimientosInventarioState = createSelector(
  getInventariosModuleState, (state: InventarioModuleState) => state.movimientos
);

export const selectMovimientosInvetarios = createSelector(
  selectMovimientosInventarioState, state => state.list
);
