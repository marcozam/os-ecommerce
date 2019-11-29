import { CREAT_CRUD_ACTIONS, CREATE_ACTION_RUTIN } from '../../helpers';
import { namespace } from '../constants';
// Models
import { Producto } from 'models/productos';

const entityName = 'Productos';

// Actions
export const {
  initialLoad: LoadProductos,
  successLoad: LoadProductosSuccess,
  failLoad: LoadProductosFail,
  initialGet: LoadProductoByID,
  successGet: LoadProductoByIDSuccess,
  failGet: LoadProductoByIDFail,
  initialSave: SaveProducto,
  successSave: SaveProductoSuccess,
  failSave: SaveProductoFail
} = CREAT_CRUD_ACTIONS<Producto>(namespace, entityName);

export const {
  initial: LoadProductosByCategoryID,
  success: LoadProductosByCategoryIDSuccess,
  fail: LoadProductosByCategoryIDFail
} = CREATE_ACTION_RUTIN<number, { id: number, list: Producto[] }, any>(`${namespace} Load ${entityName} By CategoryID`);
