import { GeneralListState } from '../../general.states';
import { data2Entities } from '../../general.selectors';
import * as fromCategorias from '../actions/categorias.action';

// Models
import { CategoriaProducto } from 'app/models/productos';

export const initialState: GeneralListState<CategoriaProducto> = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromCategorias.CategoriasAction
): GeneralListState<CategoriaProducto> {
    switch (action.type) {
        case fromCategorias.CategoriasActionTypes.LOAD_MARCAS_BY_CATEGORIA:
        case fromCategorias.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID:
        case fromCategorias.CategoriasActionTypes.SAVE_CATEGORIA:
        case fromCategorias.CategoriasActionTypes.LOAD_CATEGORIAS: {
            return { ...state, loading: true };
        }
        case fromCategorias.CategoriasActionTypes.LOAD_CATEGORIAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                entities: data2Entities<CategoriaProducto>(action.payload, state)
            };
        }
        case fromCategorias.CategoriasActionTypes.SAVE_CATEGORIA_SUCCESS:
        case fromCategorias.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_SUCCESS: {
            const entities = {
                ...state.entities,
                [action.payload.key]: action.payload
            };
            return { ...state, loading: false, entities };
        }
        case fromCategorias.CategoriasActionTypes.LOAD_MARCAS_BY_CATEGORIA_SUCCESS: {
            const categoria = state.entities[action.categoriaID];
            categoria.marcas = action.payload;
            categoria.marcasLoaded = true;
            const entities = { ...state.entities, [action.categoriaID]: categoria };
            return { ...state, loading: false, entities };
        }
        case fromCategorias.CategoriasActionTypes.LOAD_CATEGORIAS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
        case fromCategorias.CategoriasActionTypes.SAVE_CATEGORIA_FAIL:
        case fromCategorias.CategoriasActionTypes.LOAD_MARCAS_BY_CATEGORIA_FAIL:
        case fromCategorias.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_FAIL: {
            return { ...state, loading: false };
        }
        case fromCategorias.CategoriasActionTypes.SET_CATEGORIA_LOADED_STATE: {
            const entities = { ...state.entities };
            entities[action.payload].productosLoaded = true;
            return { ...state, entities };
        }
    }
    return state;
}
