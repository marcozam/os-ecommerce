import { Action } from '@ngrx/store';
// Models
import { GeneralError } from 'app/models';
import { CategoriaProducto } from 'app/models/productos';

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
export class LoadCategoriasFail implements Action {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIAS_FAIL;
    constructor(public payload: any) { }
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
export class LoadCategoriaByIDFail implements Action {
    readonly type = CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_FAIL;
    constructor(public error: GeneralError) { }
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
    SetCategoriaLoadedState | SetCategoriaLoadingState;
