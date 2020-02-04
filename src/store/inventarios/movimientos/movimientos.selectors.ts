
import { createSelector } from '@ngrx/store';
import { getInventariosModuleState } from '../constants';

export const selectInventarioState = createSelector(
  getInventariosModuleState, state => state.inventario
);

export const selectMovimientosInvetarios = createSelector(
  selectInventarioState, state => state.movimientos
);

export const selectInvetario = createSelector(
  selectInventarioState, state => state.inventario
);
