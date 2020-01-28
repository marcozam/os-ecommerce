
import { createSelector } from '@ngrx/store';
import { getInventariosModuleState, InventarioModuleState } from '../constants';
import { tiposMovimientoInventarioAdapter } from './tipos-movimiento.entities';

export const selectTiposMovimientoInventarioState = createSelector(
  getInventariosModuleState, (state: InventarioModuleState) => state.tiposMovimientos
);

export const {
  selectEntities: selectTiposMovimientoInvetariosEntities,
  selectAll: selectAllTiposMovimientoInvetarios,
} = tiposMovimientoInventarioAdapter.getSelectors(selectTiposMovimientoInventarioState);

export const selectTiposMovimientoInventarioLoaded = createSelector(
  selectTiposMovimientoInventarioState, state => state.loaded
);
