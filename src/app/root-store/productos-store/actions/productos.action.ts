import { Action } from '@ngrx/store';
// Models
import { Producto } from 'app/models/productos/producto.models';
import { MessageAction } from 'app/models';
import { NOTIFICATION_CODE, PRODUCTOS_NOTIFICATION_SECTIONS } from 'app/notifications';

// CONSTANTS
export enum PRODUCTOS_ACTION_TYPES {
    // Load All
    LOAD_PRODUCTOS = '[Products] Load All Productos',
    LOAD_PRODUCTOS_FAIL = '[Products] Load Productos fail',
    LOAD_PRODUCTOS_SUCCESS = '[Products] Load Productos success',
    // Load By ID
    LOAD_PRODUCTO_BY_ID = '[Products] Load Producto By ID',
    LOAD_PRODUCTO_BY_ID_FAIL = '[Products] Load Producto By ID fail',
    LOAD_PRODUCTO_BY_ID_SUCCESS = '[Products] Load Producto By ID success',
    // Load By Category ID
    LOAD_PRODUCTOS_BY_CATEGORY_ID = '[Products] Load Productos By CategoryID',
    LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL = '[Products] Load Productos By CategoryID fail',
    LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS = '[Products] Load Productos By CategoryID success',
    // Save
    SAVE_PRODUCTO = '[Products] Save Producto',
    SAVE_PRODUCTO_FAIL = '[Products] Save Producto fail',
    SAVE_PRODUCTO_SUCCESS = '[Products] Save Producto success',
    // Delete
    DELETE_PRODUCTO = '[Products] Delete Producto',
    DELETE_PRODUCTO_FAIL = '[Products] Delete Producto fail',
    DELETE_PRODUCTO_SUCCESS = '[Products] Delete Producto success',
}

export const PRODUCTOS_NOTIFICATION_ACTIONS = [
    PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_FAIL,
    PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_FAIL,
    PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL,
    PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL,
    PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS,
    PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO_FAIL,
    PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO_SUCCESS,
];

// Actions
// Load All
export class LoadProductos implements Action { readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS; }
export class LoadProductosSuccess implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_SUCCESS;
    constructor(public payload: Producto[]) { }
}
export class LoadProductosFail implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_FAIL;
    constructor(public payload: any) { }
}
// Load By ID
export class LoadProductoByID implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID;
    constructor(public payload: number) { }
}
export class LoadProductoByIDSuccess implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_SUCCESS;
    constructor(public payload: Producto) { }
}
export class LoadProductoByIDFail implements Action, MessageAction {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.MARCAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
// Load ByCategory ID
export class LoadProductosByCategoryID implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID;
    constructor(public payload: number) { }
}
export class LoadProductosByCategoryIDSuccess implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS;
    constructor(public payload: {id: number, list: Producto[]}) { }
}
export class LoadProductosByCategoryIDFail implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL;
    constructor(public payload: any) { }
}
// Save
export class SaveProducto implements Action {
    readonly type = PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO;
    constructor(public payload: Producto) { }
}
export class SaveProductoSuccess implements Action, MessageAction {
    readonly type = PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.PRODUCTOS;
    constructor(public payload: Producto, public messageCode: NOTIFICATION_CODE) { }
}
export class SaveProductoFail implements Action, MessageAction {
    readonly type = PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.PRODUCTOS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}

export type ProductosAction =
    LoadProductos | LoadProductosSuccess | LoadProductosFail |
    LoadProductoByID | LoadProductoByIDSuccess | LoadProductoByIDFail |
    LoadProductosByCategoryID | LoadProductosByCategoryIDSuccess | LoadProductosByCategoryIDFail |
    SaveProducto | SaveProductoSuccess | SaveProductoFail;
