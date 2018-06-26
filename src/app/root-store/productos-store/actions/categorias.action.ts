import { Action } from '@ngrx/store';
// Constants
import { MessageCode } from 'app/constants';
import { ProductosMessageSection } from '../productos-store.constants';
// Models
import { CategoriaProducto } from 'app/models/productos';
import { MessageAction } from 'app/models';

// CONSTANTS
export enum CategoriasActionTypes {
    // Load All
    LOAD_CATEGORIAS = '[Products] Load All Categorias',
    LOAD_CATEGORIAS_FAIL = '[Products] Load Categorias fail',
    LOAD_CATEGORIAS_SUCCESS = '[Products] Load Categorias success',
    // Load By ID
    LOAD_CATEGORIA_BY_ID = '[Products] Load Categoria By ID',
    LOAD_CATEGORIA_BY_ID_FAIL = '[Products] Load Categoria By ID fail',
    LOAD_CATEGORIA_BY_ID_SUCCESS = '[Products] Load Categoria By ID success',
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

// ACTIONS
// Load All
export class LoadAllCategorias implements Action {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIAS;
}
export class LoadCategoriasFail implements Action, MessageAction {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIAS_FAIL;
    readonly messageSection = ProductosMessageSection.CATEGORIAS;
    constructor(public messageCode: MessageCode) { }
}
export class LoadCategoriasSuccess implements Action {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIAS_SUCCESS;
    constructor(public payload: CategoriaProducto[]) { }
}
// Load By ID
export class LoadCategoriaByID implements Action {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIA_BY_ID;
    constructor(public payload: number) { }
}
export class LoadCategoriaByIDSuccess implements Action {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_SUCCESS;
    constructor(public payload: CategoriaProducto) { }
}
export class LoadCategoriaByIDFail implements Action, MessageAction {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_FAIL;
    readonly messageSection = ProductosMessageSection.CATEGORIAS;
    constructor(public messageCode: MessageCode) { }
}
// Save
export class SaveCategoria implements Action {
    readonly type = CategoriasActionTypes.SAVE_CATEGORIA;
    constructor(public newItem: CategoriaProducto, public oldItem: CategoriaProducto) { }
}
export class SaveCategoriaSuccess implements Action, MessageAction {
    readonly type = CategoriasActionTypes.SAVE_CATEGORIA_SUCCESS;
    readonly messageSection = ProductosMessageSection.CATEGORIAS;
    constructor(public payload: CategoriaProducto, public messageCode: MessageCode) { }
}
export class SaveCategoriaFail implements Action, MessageAction {
    readonly type = CategoriasActionTypes.SAVE_CATEGORIA_FAIL;
    readonly messageSection = ProductosMessageSection.CATEGORIAS;
    constructor(public messageCode: MessageCode) { }
}
// Update
export class SetCategoriaLoadedState implements Action {
    readonly type = CategoriasActionTypes.SET_CATEGORIA_LOADED_STATE;
    constructor(public payload: number) {}
}
export class SetCategoriaLoadingState implements Action {
    readonly type = CategoriasActionTypes.SET_CATEGORIA_LOADING_STATE;
    constructor(public payload: number) {}
}

export type CategoriasAction =
    LoadAllCategorias | LoadCategoriasFail | LoadCategoriasSuccess |
    LoadCategoriaByID | LoadCategoriaByIDFail | LoadCategoriaByIDSuccess |
    SaveCategoria | SaveCategoriaFail | SaveCategoriaSuccess |
    SetCategoriaLoadedState | SetCategoriaLoadingState;
