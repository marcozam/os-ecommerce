import { Action } from '@ngrx/store';
// Notifications
import {
    NOTIFICATION_CODE,
    PRODUCTOS_NOTIFICATION_SECTIONS
} from 'app/notifications';
// Models
import { MessageAction } from 'app/models';
import { MarcaProducto, CategoriaProducto } from 'app/models/productos';

// CONSTANTS
export enum MARCAS_ACTION_TYPES {
    // Load All
    LOAD_MARCAS = '[Products] Load All Marcas',
    LOAD_MARCAS_FAIL = '[Products] Load Marcas fail',
    LOAD_MARCAS_SUCCESS = '[Products] Load Marcas success',
    // Load By ID
    LOAD_MARCA_BY_ID = '[Products] Load Marca By ID',
    LOAD_MARCA_BY_ID_FAIL = '[Products] Load Marca By ID fail',
    LOAD_MARCA_BY_ID_SUCCESS = '[Products] Load Marca By ID success',
    // Load Categoria By Marca
    LOAD_CATEGORIAS_BY_MARCA = '[Products] Load Categoria By MarcaID',
    LOAD_CATEGORIAS_BY_MARCA_FAIL = '[Products] Load Categoria By MarcaID fail',
    LOAD_CATEGORIAS_BY_MARCA_SUCCESS = '[Products] Load Categoria By MarcaID success',
    // Save
    SAVE_MARCA = '[Products] Save Marca',
    SAVE_MARCA_FAIL = '[Products] Save Marca fail',
    SAVE_MARCA_SUCCESS = '[Products] Save Marca success',
    // Delete
    DELETE_MARCA = '[Products] Delete Marca',
    DELETE_MARCA_FAIL = '[Products] Delete Marca fail',
    DELETE_MARCA_SUCCESS = '[Products] Delete Marca success',
}

export const MARCAS_NOTIFICATION_ACTIONS = [
    MARCAS_ACTION_TYPES.LOAD_MARCAS_FAIL,
    MARCAS_ACTION_TYPES.LOAD_MARCA_BY_ID_FAIL,
    MARCAS_ACTION_TYPES.LOAD_CATEGORIAS_BY_MARCA_FAIL,
    MARCAS_ACTION_TYPES.SAVE_MARCA_FAIL,
    MARCAS_ACTION_TYPES.SAVE_MARCA_SUCCESS,
    MARCAS_ACTION_TYPES.DELETE_MARCA_FAIL,
    MARCAS_ACTION_TYPES.DELETE_MARCA_SUCCESS,
];

// ACTIONS
// Load All
export class LoadMarcas implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_MARCAS;
}
export class LoadMarcasFail implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_MARCAS_FAIL;
    constructor(public payload: any) { }
}
export class LoadMarcasSuccess implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_MARCAS_SUCCESS;
    constructor(public payload: MarcaProducto[]) { }
}
// Load By ID
export class LoadMarcaByID implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_MARCA_BY_ID;
    constructor(public payload: number) { }
}
export class LoadMarcaByIDSuccess implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_MARCA_BY_ID_SUCCESS;
    constructor(public payload: MarcaProducto) { }
}
export class LoadMarcaByIDFail implements Action, MessageAction {
    readonly type = MARCAS_ACTION_TYPES.LOAD_MARCA_BY_ID_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.MARCAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
// Load Categorias By MarcaID
export class LoadCategoriasByMarcaID implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_CATEGORIAS_BY_MARCA;
    constructor(public payload: number) { }
}
export class LoadCategoriasByMarcaIDSuccess implements Action {
    readonly type = MARCAS_ACTION_TYPES.LOAD_CATEGORIAS_BY_MARCA_SUCCESS;
    constructor(public payload: CategoriaProducto[], public marcaID: number) { }
}
export class LoadCategoriasByMarcaIDFail implements Action, MessageAction {
    readonly type = MARCAS_ACTION_TYPES.LOAD_CATEGORIAS_BY_MARCA_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
// Save
export class SaveMarca implements Action {
    readonly type = MARCAS_ACTION_TYPES.SAVE_MARCA;
    constructor(public newItem: MarcaProducto, public oldItem: MarcaProducto) { }
}
export class SaveMarcaSuccess implements Action, MessageAction {
    readonly type = MARCAS_ACTION_TYPES.SAVE_MARCA_SUCCESS;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.MARCAS;
    constructor(public payload: MarcaProducto, public messageCode: NOTIFICATION_CODE) { }
}
export class SaveMarcaFail implements Action, MessageAction {
    readonly type = MARCAS_ACTION_TYPES.SAVE_MARCA_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.MARCAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}

export type MarcasAction =
    LoadMarcas | LoadMarcasSuccess | LoadMarcasFail |
    LoadMarcaByID | LoadMarcaByIDSuccess | LoadMarcaByIDFail |
    LoadCategoriasByMarcaID | LoadCategoriasByMarcaIDFail | LoadCategoriasByMarcaIDSuccess |
    SaveMarca | SaveMarcaSuccess | SaveMarcaFail;
