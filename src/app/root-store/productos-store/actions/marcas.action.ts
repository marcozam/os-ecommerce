import { Action } from '@ngrx/store';
// Models
import { MarcaProducto } from 'app/models/productos/producto.models';

// CONSTANTS
export enum MarcasActionTypes {
    // Load All
    LOAD_MARCAS = '[Products] Load All Marcas',
    LOAD_MARCAS_FAIL = '[Products] Load Marcas fail',
    LOAD_MARCAS_SUCCESS = '[Products] Load Marcas success',
    // Load By ID
    LOAD_MARCA_BY_ID = '[Products] Load Marca By ID',
    LOAD_MARCA_BY_ID_FAIL = '[Products] Load Marca By ID fail',
    LOAD_MARCA_BY_ID_SUCCESS = '[Products] Load Marca By ID success',
}

// ACTIONS
// Load All
export class LoadMarcas implements Action {
    readonly type = MarcasActionTypes.LOAD_MARCAS;
}
export class LoadMarcasFail implements Action {
    readonly type = MarcasActionTypes.LOAD_MARCAS_FAIL;
    constructor(public payload: any) { }
}
export class LoadMarcasSuccess implements Action {
    readonly type = MarcasActionTypes.LOAD_MARCAS_SUCCESS;
    constructor(public payload: MarcaProducto[]) { }
}
// Load By ID
export class LoadMarcaByID implements Action {
    readonly type = MarcasActionTypes.LOAD_MARCA_BY_ID;
    constructor(public payload: number) { }
}
export class LoadMarcaByIDSuccess implements Action {
    readonly type = MarcasActionTypes.LOAD_MARCA_BY_ID_SUCCESS;
    constructor(public payload: MarcaProducto) { }
}
export class LoadMarcaByIDFail implements Action {
    readonly type = MarcasActionTypes.LOAD_MARCA_BY_ID_FAIL;
    constructor(public payload: any) { }
}

export type MarcasAction =
    LoadMarcas | LoadMarcasSuccess | LoadMarcasFail |
    LoadMarcaByID | LoadMarcaByIDSuccess | LoadMarcaByIDFail;
