import { GeneralListState } from '../../general.states';
import { data2Entities } from '../../general.selectors';
import * as fromMarcas from '../actions/marcas.action';

// Models
import { MarcaProducto } from 'app/models/productos';

export const initialState: GeneralListState<MarcaProducto> = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromMarcas.MarcasAction
): GeneralListState<MarcaProducto> {
    switch (action.type) {
        case fromMarcas.MarcasActionTypes.LOAD_MARCAS:
        case fromMarcas.MarcasActionTypes.SAVE_MARCA:
        case fromMarcas.MarcasActionTypes.LOAD_MARCA_BY_ID:
        case fromMarcas.MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA: {
            return { ...state, loading: true };
        }
        case fromMarcas.MarcasActionTypes.LOAD_MARCAS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                entities: data2Entities<MarcaProducto>(action.payload, state)
            };
        }
        case fromMarcas.MarcasActionTypes.SAVE_MARCA_SUCCESS:
        case fromMarcas.MarcasActionTypes.LOAD_MARCA_BY_ID_SUCCESS: {
            const entities = {
                ...state.entities,
                [action.payload.key]: action.payload
            };
            return { ...state, loading: false, entities };
        }
        case fromMarcas.MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA_SUCCESS: {
            const marca = state.entities[action.marcaID];
            marca.categorias = action.payload;
            marca.categoriasLoaded = true;
            const entities = { ...state.entities, [action.marcaID]: marca };
            return { ...state, loading: false, entities };
        }
        case fromMarcas.MarcasActionTypes.LOAD_MARCA_BY_ID_FAIL:
        case fromMarcas.MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA_FAIL:
        case fromMarcas.MarcasActionTypes.SAVE_MARCA_FAIL: {
            return { ...state, loading: false };
        }
        case fromMarcas.MarcasActionTypes.LOAD_MARCAS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }
    return state;
}
