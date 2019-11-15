import { GeneralListState } from '../../general.states';
import { data2Entities } from '../../general.selectors';
import * as fromCategorias from '../actions/categorias.action';

// Models
import { CategoriaProducto } from 'models/productos';

export const initialState: GeneralListState<CategoriaProducto> = {
    entities: {},
    loaded: false,
};

export function reducer(
    state = initialState,
    action: fromCategorias.CategoriasAction
): GeneralListState<CategoriaProducto> {
    switch (action.type) {
        case fromCategorias.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS_SUCCESS: {
            return {
                ...state,
                loaded: true,
                entities: data2Entities<CategoriaProducto>(action.payload, state)
            };
        }
        case fromCategorias.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_SUCCESS:
        case fromCategorias.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID_SUCCESS: {
            const entities = {
                ...state.entities,
                [action.payload.key]: action.payload
            };
            return { ...state, entities };
        }
        case fromCategorias.CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA_SUCCESS: {
            const categoria = state.entities[action.categoriaID];
            categoria.marcas = action.payload;
            categoria.marcasLoaded = true;
            const entities = { ...state.entities, [action.categoriaID]: categoria };
            return { ...state, entities };
        }
        case fromCategorias.CATEGORIAS_ACTION_TYPES.SET_CATEGORIA_LOADED_STATE: {
            let entities = { ...state.entities };
            const newData = { ...entities[action.payload], productosLoaded: true };
            entities = { ...entities, [action.payload]: newData };
            return { ...state, entities };
        }
    }
    return state;
}
