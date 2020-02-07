import { createSelector } from '@ngrx/store';
import { selectCRMModuleState } from '../constants';
import { tipoDatoContactoAdapter } from './tipo-dato-contacto.entities';

export const selectTipoDatoContactoState = createSelector(
  selectCRMModuleState, state => state.tipoDatoContacto
);

export const {
  selectEntities: selectTipoDatoContactoEntities,
  selectAll: selectAllTipoDatoContacto,
} = tipoDatoContactoAdapter.getSelectors(selectTipoDatoContactoState);

export const selectTipoDatoContactoLoaded = createSelector(
  selectTipoDatoContactoState, state => state.loaded
);
