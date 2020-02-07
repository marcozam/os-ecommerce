import { createSelector } from '@ngrx/store';
import { selectBaseCatalogsModuleState } from '../constants';
import { adapter } from './persona.entities';

export const selectPersonaState = createSelector(
  selectBaseCatalogsModuleState, state => state.persona
);

export const {
  selectEntities: selectPersonasEntities,
  selectAll: selectAllPersonas,
} = adapter.getSelectors(selectPersonaState);

export const selectPersonasLoaded = createSelector(
  selectPersonaState, state => state.loaded
);

export const selectSelectedPersonaId = createSelector(
  selectPersonaState, state => state.selected
);

export const selectSelectedPersona = createSelector(
  selectPersonasEntities,
  selectSelectedPersonaId,
  (entities, key) => entities[key]
);
