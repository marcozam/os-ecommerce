import { createSelector } from '@ngrx/store';
import { selectBaseCatalogsModuleState } from '../constants';
import { adapter } from './sucursal.entity';

export const selectSucursalState = createSelector(
  selectBaseCatalogsModuleState, state => state.sucursal
);

export const {
  selectEntities: selectSucursalesEntities,
  selectAll: selectAllSucursales,
} = adapter.getSelectors(selectSucursalState);

export const selectSucursalesLoaded = createSelector(
  selectSucursalState, state => state.loaded
);

export const selectSelectedSucursalId = createSelector(
  selectSucursalState, state => state.selected
);

export const selectActiveSucursal = createSelector(
  selectSucursalesEntities,
  selectSelectedSucursalId,
  (entities, key) => entities[key]
);
