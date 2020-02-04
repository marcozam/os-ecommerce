import { CREATE_CRUD_ACTIONS } from 'store/helpers';
import { Persona } from 'models';

import { namespace } from '../constants';
import { entityName } from './constants';

export const {
  initialSave: SavePersonaAction,
  successSave: SavePersonaSuccessAction,
  failSave: SavePersonaFailAction,
  initialGet: GetPersonaAction,
  successGet: GetPersonaSuccessAction,
  failGet: GetPersonaFailAction,
  initialLoad: LoadPersonasAction,
  successLoad: LoadPersonasSuccessAction,
  failLoad: LoadPersonasFailAction,
} = CREATE_CRUD_ACTIONS<Persona>(namespace, entityName);
