
import { createAction, props } from '@ngrx/store';
import { CREATE_CRUD_ACTIONS, CREATE_ACTION_RUTIN } from 'store/helpers';
// Models
import { Contacto, DatoContacto } from 'models/crm';
import { entityName } from './constants';
import { namespace } from '../constants';

export const {
    initialSave: SaveContactoAction,
    successSave: SaveContactoSuccessAction,
    failSave: SaveContactoFailAction,
    initialGet: GetContactoAction,
    successGet: GetContactoSuccessAction,
    failGet: GetContactoFailAction,
    initialLoad: LoadContactosAction,
    successLoad: LoadContactosSuccessAction,
    failLoad: LoadContactosFailAction,
} = CREATE_CRUD_ACTIONS<Contacto>(namespace, entityName);

export const {
  initial: LoadDatosContactoAction,
  success: LoadDatosContactoSuccessAction,
  fail: LoadDatosContactoFailAction,
} = CREATE_ACTION_RUTIN<number, DatoContacto[], any>(`${namespace} Load Datos de Contacto`);

export const {
  initial: SearchContactoAction,
  success: SearchContactoSuccessAction,
  fail: SearchContactoFailAction,
} = CREATE_ACTION_RUTIN<{ nombre: string, apellido: string }, Contacto[], any>(`${namespace} Search ${entityName}`);

export const SelectContactoAction = createAction(
  `${namespace} Select ${entityName}`,
  props<{ payload: number }>());
