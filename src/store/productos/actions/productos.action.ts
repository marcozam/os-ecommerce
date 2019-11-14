import { CREAT_CRUD_ACTIONS, CREATE_ACTION_RUTIN } from '../../helpers';
import { namespace } from '../constants';
// Notification
import { NOTIFICATION_CODE, PRODUCTOS_NOTIFICATION_SECTIONS } from 'app/notifications';
// Models
import { Producto } from 'models';
// import { MessageAction } from 'app/common';

const entityName = 'Productos';

export const PRODUCTOS_NOTIFICATION_ACTIONS = [
  /*
  PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_FAIL,
  PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_FAIL,
  PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL,
  PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL,
  PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS,
  PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO_FAIL,
  PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO_SUCCESS,
  */
];

// Actions
export const [
  LoadProductos,
  LoadProductosSuccess,
  LoadProductosFail,
  LoadProductoByID,
  LoadProductoByIDSuccess,
  LoadProductoByIDFail,
  SaveProducto,
  SaveProductoSuccess,
  SaveProductoFail
] = CREAT_CRUD_ACTIONS<Producto>(namespace, entityName);

export const [
  LoadProductosByCategoryID,
  LoadProductosByCategoryIDSuccess,
  LoadProductosByCategoryIDFail,
] = CREATE_ACTION_RUTIN<{id: number, list: Producto[]}, any, number>(`${namespace} Load ${entityName} By CategoryID`, true);

/*
export const SaveProductoSuccess implements Action, MessageAction {
  readonly type = PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS;
  readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.PRODUCTOS;
  constructor(public payload: Producto, public messageCode: NOTIFICATION_CODE) { }
}
export const SaveProductoFail implements Action, MessageAction {
  readonly type = PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL;
  readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.PRODUCTOS;
  constructor(public messageCode: NOTIFICATION_CODE) { }
}
export const LoadProductoByIDFail implements Action, MessageAction {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.MARCAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
*/
