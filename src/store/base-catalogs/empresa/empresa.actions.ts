import { CREATE_CRUD_ACTIONS } from 'store/helpers';
import { Empresa } from 'models';

import { namespace } from '../constants';
import { entityName } from './constants';

export const {
  initialSave: SaveEmpresaAction,
  successSave: SaveEmpresaSuccessAction,
  failSave: SaveEmpresaFailAction,
  initialGet: GetEmpresaAction,
  successGet: GetEmpresaSuccessAction,
  failGet: GetEmpresaFailAction,
  initialLoad: LoadEmpresasAction,
  successLoad: LoadEmpresasSuccessAction,
  failLoad: LoadEmpresasFailAction,
} = CREATE_CRUD_ACTIONS<Empresa>(namespace, entityName);
