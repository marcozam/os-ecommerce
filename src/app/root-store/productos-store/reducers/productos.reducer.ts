import { GeneralListState } from '../../general.states';
import { data2Entities } from '../../general.selectors';
import * as fromProductos from '../actions/productos.action';

// Models
import { Producto } from 'app/models/productos/producto.models';

export const initialState: GeneralListState<Producto> = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromProductos.ProductosAction
): GeneralListState<Producto> {
    switch (action.type) {
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS:
        case fromProductos.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO:
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID:
        {
            return { ...state, loading: true };
        }
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_SUCCESS:
        case fromProductos.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS: {
            const entities = {
                ...state.entities,
                [action.payload.key]: action.payload
            };
            return { ...state, loading: false, entities };
        }
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                entities: data2Entities<Producto>(action.payload, state)
            };
        }
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS: {
            const entities = { ...state.entities, ...data2Entities<Producto>(action.payload.list, state) };
            return { ...state, entities };
        }
        case fromProductos.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL:
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_FAIL: {
            return { ...state, loading: false };
        }
        case fromProductos.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }
    return state;
}
