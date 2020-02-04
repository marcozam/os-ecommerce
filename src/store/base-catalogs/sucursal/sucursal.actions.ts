
import { createAction, props } from '@ngrx/store';
import { CREATE_CRUD_ACTIONS } from 'store/helpers';
import { Sucursal } from 'models';

import { namespace } from '../constants';
import { entityName } from './constants';

export const {
  initialSave: SaveSucursalAction,
  successSave: SaveSucursalSuccessAction,
  failSave: SaveSucursalFailAction,
  initialGet: GetSucursalAction,
  successGet: GetSucursalSuccessAction,
  failGet: GetSucursalFailAction,
  initialLoad: LoadSucursalesAction,
  successLoad: LoadSucursalesSuccessAction,
  failLoad: LoadSucursalesFailAction,
} = CREATE_CRUD_ACTIONS<Sucursal>(namespace, entityName);

export const SetActiveSucursal = createAction(
  `${namespace} set selected ${entityName}`,
  props<{ payload: number }>());
