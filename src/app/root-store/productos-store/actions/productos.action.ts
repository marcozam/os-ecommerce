import { Action } from '@ngrx/store';
// Models
import { Producto } from 'app/models/productos/producto.models';

// CONSTANTS
// Load All
export const LOAD_PRODUCTOS = '[Products] Load All Productos';
export const LOAD_PRODUCTOS_FAIL = '[Products] Load Productos fail';
export const LOAD_PRODUCTOS_SUCCESS = '[Products] Load Productos success';
// Load By ID
export const LOAD_PRODUCTO_BY_ID = '[Products] Load Producto By ID';
export const LOAD_PRODUCTO_BY_ID_FAIL = '[Products] Load Producto By ID fail';
export const LOAD_PRODUCTO_BY_ID_SUCCESS = '[Products] Load Producto By ID success';
// Load By Category ID
export const LOAD_PRODUCTOS_BY_CATEGORY_ID = '[Products] Load Productos By CategoryID';
export const LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL = '[Products] Load Productos By CategoryID fail';
export const LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS = '[Products] Load Productos By CategoryID success';
// Save
export const SAVE_PRODUCTO = '[Products] Save Producto';
export const SAVE_PRODUCTO_FAIL = '[Products] Save Producto fail';
export const SAVE_PRODUCTO_SUCCESS = '[Products] Save Producto success';
// Delete
export const DELETE_PRODUCTO = '[Products] Delete Producto';
export const DELETE_PRODUCTO_FAIL = '[Products] Delete Producto fail';
export const DELETE_PRODUCTO_SUCCESS = '[Products] Delete Producto success';

// Actions
// Load All
export class LoadProductos implements Action { readonly type = LOAD_PRODUCTOS; }
export class LoadProductosSuccess implements Action {
    readonly type = LOAD_PRODUCTOS_SUCCESS;
    constructor(public payload: Producto[]) { }
}
export class LoadProductosFail implements Action {
    readonly type = LOAD_PRODUCTOS_FAIL;
    constructor(public payload: any) { }
}
// Load By ID
export class LoadProductoByID implements Action {
    readonly type = LOAD_PRODUCTO_BY_ID;
    constructor(public payload: number) { }
}
export class LoadProductoByIDSuccess implements Action {
    readonly type = LOAD_PRODUCTO_BY_ID_SUCCESS;
    constructor(public payload: Producto) { }
}
export class LoadProductoByIDFail implements Action {
    readonly type = LOAD_PRODUCTO_BY_ID_FAIL;
    constructor(public payload: any) { }
}
// Load ByCategory ID
export class LoadProductosByCategoryID implements Action {
    readonly type = LOAD_PRODUCTOS_BY_CATEGORY_ID;
    constructor(public payload: number) { }
}
export class LoadProductosByCategoryIDSuccess implements Action {
    readonly type = LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS;
    constructor(public payload: {id: number, list: Producto[]}) { }
}
export class LoadProductosByCategoryIDFail implements Action {
    readonly type = LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL;
    constructor(public payload: any) { }
}
// Save
export class SaveProducto implements Action {
    readonly type = SAVE_PRODUCTO;
    constructor(public payload: Producto) { }
}
export class SaveProductoSuccess implements Action {
    readonly type = SAVE_PRODUCTO_SUCCESS;
    constructor(public payload: Producto) { }
}
export class SaveProductoFail implements Action {
    readonly type = SAVE_PRODUCTO_FAIL;
    constructor(public payload: any) { }
}

export type ProductosAction =
    LoadProductos | LoadProductosSuccess | LoadProductosFail |
    LoadProductoByID | LoadProductoByIDSuccess | LoadProductoByIDFail |
    LoadProductosByCategoryID | LoadProductosByCategoryIDSuccess | LoadProductosByCategoryIDFail |
    SaveProducto | SaveProductoSuccess | SaveProductoFail;
