
import { createSelector } from '@ngrx/store';
import { selectCRMModuleState } from '../constants';
import { contactosAdapter, searchContactosAdapter } from './contacto.entities';

export const selectContactosState = createSelector(
  selectCRMModuleState, state => state.contactos
);

export const selectContactosSearchState = createSelector(
  selectContactosState, state => state.search
);

export const {
  selectEntities: selectSearchContactosEntities,
  selectAll: selectAllSearchContactos,
} = searchContactosAdapter.getSelectors(selectContactosSearchState);

export const {
  selectEntities: selectContactosEntities,
  selectAll: selectAllContactos,
} = contactosAdapter.getSelectors(selectContactosSearchState);

export const selectSelectedContactoId = createSelector(
  selectContactosState, state => state.selected
);

export const selectSelectedContacto = createSelector(
  selectContactosEntities,
  selectSelectedContactoId,
  (entities, key) => entities[key]
);
