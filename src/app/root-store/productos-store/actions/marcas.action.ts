import { Action } from '@ngrx/store';
// Models
import { MarcaProducto } from 'app/models/productos/producto.models';

// CONSTANTS
// Load All
export const LOAD_MARCAS = '[Products] Load All Marcas';
export const LOAD_MARCAS_FAIL = '[Products] Load Marcas fail';
export const LOAD_MARCAS_SUCCESS = '[Products] Load Marcas success';

// ACTIONS
// Load All
export class LoadMarcas implements Action {
    readonly type = LOAD_MARCAS;
}
export class LoadMarcasFail implements Action {
    readonly type = LOAD_MARCAS_FAIL;
    constructor(public payload: any) { }
}
export class LoadMarcasSuccess implements Action {
    readonly type = LOAD_MARCAS_SUCCESS;
    constructor(public payload: MarcaProducto[]) { }
}

export type MarcasAction =
    LoadMarcas | LoadMarcasSuccess | LoadMarcasFail;
