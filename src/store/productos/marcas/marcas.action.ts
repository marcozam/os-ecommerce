import { CREATE_CRUD_ACTIONS, CREATE_ACTION_RUTIN } from '../../helpers';
import { namespace } from '../constants';
// Models
import { MarcaProducto } from 'models/productos';

const entityName = 'Marcas';

// Actions
export const {
  initialLoad: LoadMarcas,
  successLoad: LoadMarcasSuccess,
  failLoad: LoadMarcasFail,
  initialGet: LoadMarcaByID,
  successGet: LoadMarcaByIDSuccess,
  failGet: LoadMarcaByIDFail,
  initialSave: SaveMarca,
  successSave: SaveMarcaSuccess,
  failSave: SaveMarcaFail
} = CREATE_CRUD_ACTIONS<MarcaProducto>(namespace, entityName);

export const {
  initial: LoadMarcasByCategoriaID,
  success: LoadMarcasByCategoriaIDSuccess,
  fail: LoadMarcasByCategoriaIDFail
} = CREATE_ACTION_RUTIN<number, { id: number, list: MarcaProducto[] }, any>(`${namespace} Load ${entityName} By Categoria`);
