
import { CREATE_CRUD_ACTIONS } from 'store/helpers';
// Models
import { TipoDatosContacto } from 'models/crm';
import { entityName } from './constants';
import { namespace } from '../constants';

export const {
    initialSave: SaveTipoDatoContactoAction,
    successSave: SaveTipoDatoContactoSuccessAction,
    failSave: SaveTipoDatoContactoFailAction,
    initialGet: GetTipoDatoContactoAction,
    successGet: GetTipoDatoContactoSuccessAction,
    failGet: GetTipoDatoContactoFailAction,
    initialLoad: LoadTipoDatoContactosAction,
    successLoad: LoadTipoDatoContactosSuccessAction,
    failLoad: LoadTipoDatoContactosFailAction,
} = CREATE_CRUD_ACTIONS<TipoDatosContacto>(namespace, entityName);
