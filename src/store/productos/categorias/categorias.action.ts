import { createAction, props } from '@ngrx/store';
import { CREAT_CRUD_ACTIONS, CREATE_ACTION_RUTIN } from '../../helpers';
import { namespace } from '../constants';
// Models
import { CategoriaProducto } from 'models/productos';

const entityName = 'Categorias';

// Actions
export const {
  initialLoad: LoadAllCategorias,
  successLoad: LoadAllCategoriasSuccess,
  failLoad: LoadAllCategoriasFail,
  initialGet: LoadCategoriaByID,
  successGet: LoadCategoriaByIDSuccess,
  failGet: LoadCategoriaByIDFail,
  initialSave: SaveCategoria,
  successSave: SaveCategoriaSuccess,
  failSave: SaveCategoriaFail
} = CREAT_CRUD_ACTIONS<CategoriaProducto>(namespace, entityName);

export const {
  initial: LoadCategoriasByMarcaID,
  success: LoadCategoriasByMarcaIDSuccess,
  fail: LoadCategoriasByMarcaIDFail
} = CREATE_ACTION_RUTIN<number, { id: number, list: CategoriaProducto[] }, any>(`${namespace} Load ${entityName} By Marca`);

export const SetCategoriaLoadedState = createAction(`${namespace} Set Categoria Loaded State`, props<{ payload: number}>());
export const SetCategoriaLoadingState = createAction(`${namespace} Set Categoria Loading State`, props<{ payload: number}>());
