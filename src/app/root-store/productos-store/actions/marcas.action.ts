import { Action } from '@ngrx/store';
// Constants
import { MessageCode } from 'app/constants';
import { ProductosMessageSection } from '../productos-store.constants';
// Models
import { MessageAction } from 'app/models';
import { MarcaProducto, CategoriaProducto } from 'app/models/productos';

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
export class LoadMarcaByIDFail implements Action, MessageAction {
    readonly type = MarcasActionTypes.LOAD_MARCA_BY_ID_FAIL;
    readonly messageSection = ProductosMessageSection.MARCAS;
    constructor(public messageCode: MessageCode) { }
}
// Load Categorias By MarcaID
export class LoadCategoriasByMarcaID implements Action {
    readonly type = MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA;
    constructor(public payload: number) { }
}
export class LoadCategoriasByMarcaIDSuccess implements Action {
    readonly type = MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA_SUCCESS;
    constructor(public payload: CategoriaProducto[], public marcaID: number) { }
}
export class LoadCategoriasByMarcaIDFail implements Action, MessageAction {
    readonly type = MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA_FAIL;
    readonly messageSection = ProductosMessageSection.CATEGORIAS;
    constructor(public messageCode: MessageCode) { }
}
// Save
export class SaveMarca implements Action {
    readonly type = MarcasActionTypes.SAVE_MARCA;
    constructor(public newItem: MarcaProducto, public oldItem: MarcaProducto) { }
}
export class SaveMarcaSuccess implements Action, MessageAction {
    readonly type = MarcasActionTypes.SAVE_MARCA_SUCCESS;
    readonly messageSection = ProductosMessageSection.MARCAS;
    constructor(public payload: MarcaProducto, public messageCode: MessageCode) { }
}
export class SaveMarcaFail implements Action, MessageAction {
    readonly type = MarcasActionTypes.SAVE_MARCA_FAIL;
    readonly messageSection = ProductosMessageSection.MARCAS;
    constructor(public messageCode: MessageCode) { }
}

export type MarcasAction =
    LoadMarcas | LoadMarcasSuccess | LoadMarcasFail |
    LoadMarcaByID | LoadMarcaByIDSuccess | LoadMarcaByIDFail |
    LoadCategoriasByMarcaID | LoadCategoriasByMarcaIDFail | LoadCategoriasByMarcaIDSuccess |
    SaveMarca | SaveMarcaSuccess | SaveMarcaFail;
