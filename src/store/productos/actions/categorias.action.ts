import { Action } from '@ngrx/store';
import { NOTIFICATION_CODE, PRODUCTOS_NOTIFICATION_SECTIONS } from 'app/notifications';
import { MessageAction } from 'app/common';
// Models
import { CategoriaProducto, MarcaProducto } from 'models/productos';

// CONSTANTS
export enum CATEGORIAS_ACTION_TYPES {
    // Load All
    LOAD_CATEGORIAS = '[Products] Load All Categorias',
    LOAD_CATEGORIAS_FAIL = '[Products] Load All Categorias fail',
    LOAD_CATEGORIAS_SUCCESS = '[Products] Load All Categorias success',
    // Load By ID
    LOAD_CATEGORIA_BY_ID = '[Products] Load Categoria By ID',
    LOAD_CATEGORIA_BY_ID_FAIL = '[Products] Load Categoria By ID fail',
    LOAD_CATEGORIA_BY_ID_SUCCESS = '[Products] Load Categoria By ID success',
    // Load Marcas By Categoria
    LOAD_MARCAS_BY_CATEGORIA = '[Products] Load Marcas By CategoriaID',
    LOAD_MARCAS_BY_CATEGORIA_FAIL = '[Products] Load Marcas By CategoriaID fail',
    LOAD_MARCAS_BY_CATEGORIA_SUCCESS = '[Products] Load Marcas By CategoriaID success',
    // Save
    SAVE_CATEGORIA = '[Products] Save Categoria',
    SAVE_CATEGORIA_FAIL = '[Products] Save Categoria fail',
    SAVE_CATEGORIA_SUCCESS = '[Products] Save Categoria success',
    // Delete
    DELETE_CATEGORIA = '[Products] Delete Categoria',
    DELETE_CATEGORIA_FAIL = '[Products] Delete Categoria fail',
    DELETE_CATEGORIA_SUCCESS = '[Products] Delete Categoria success',
    // Update
    SET_CATEGORIA_LOADED_STATE = '[Products] Set Categoria Loaded State',
    SET_CATEGORIA_LOADING_STATE = '[Products] Set Categoria Loading State'
}

export const CATEGORIAS_NOTIFICATION_ACTIONS = [
    CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS_FAIL,
    CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID_FAIL,
    CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA_FAIL,
    CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_FAIL,
    CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_SUCCESS,
    CATEGORIAS_ACTION_TYPES.DELETE_CATEGORIA_FAIL,
    CATEGORIAS_ACTION_TYPES.DELETE_CATEGORIA_SUCCESS
];

// ACTIONS



// Load All
export class LoadAllCategorias implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS;
}











export class LoadCategoriasFail implements Action, MessageAction {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
export class LoadCategoriasSuccess implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS_SUCCESS;
    constructor(public payload: CategoriaProducto[]) { }
}
// Load By ID
export class LoadCategoriaByID implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID;
    constructor(public payload: number, public name: string) { }
}
export class LoadCategoriaByIDSuccess implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID_SUCCESS;
    constructor(public payload: CategoriaProducto) { }
}
export class LoadCategoriaByIDFail implements Action, MessageAction {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
// Load Marcas By Categoria
export class LoadMarcasByCategoriaID implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA;
    constructor(public payload: number) { }
}
export class LoadMarcasByCategoriaIDSuccess implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA_SUCCESS;
    constructor(public payload: MarcaProducto[], public categoriaID: number) { }
}
export class LoadMarcasByCategoriaIDFail implements Action, MessageAction {
    readonly type = CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
// Save
export class SaveCategoria implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA;
    constructor(public newItem: CategoriaProducto, public oldItem: CategoriaProducto) { }
}
export class SaveCategoriaSuccess implements Action, MessageAction {
    readonly type = CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_SUCCESS;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS;
    constructor(public payload: CategoriaProducto, public messageCode: NOTIFICATION_CODE) { }
}
export class SaveCategoriaFail implements Action, MessageAction {
    readonly type = CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_FAIL;
    readonly messageSection = PRODUCTOS_NOTIFICATION_SECTIONS.CATEGORIAS;
    constructor(public messageCode: NOTIFICATION_CODE) { }
}
// Update
export class SetCategoriaLoadedState implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.SET_CATEGORIA_LOADED_STATE;
    constructor(public payload: number) {}
}
export class SetCategoriaLoadingState implements Action {
    readonly type = CATEGORIAS_ACTION_TYPES.SET_CATEGORIA_LOADING_STATE;
    constructor(public payload: number) {}
}

export type CategoriasAction =
    LoadAllCategorias | LoadCategoriasFail | LoadCategoriasSuccess |
    LoadCategoriaByID | LoadCategoriaByIDFail | LoadCategoriaByIDSuccess |
    LoadMarcasByCategoriaID | LoadMarcasByCategoriaIDFail | LoadMarcasByCategoriaIDSuccess |
    SaveCategoria | SaveCategoriaFail | SaveCategoriaSuccess |
    SetCategoriaLoadedState | SetCategoriaLoadingState;
