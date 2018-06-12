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
        case fromProductos.LOAD_PRODUCTOS:
        case fromProductos.LOAD_PRODUCTO_BY_ID:
        {
            return { ...state, loading: true };
        }
        case fromProductos.LOAD_PRODUCTOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                entities: data2Entities<Producto>(action.payload, state)
            };
        }
        case fromProductos.LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS: {
            const entities = { ...state.entities, ...data2Entities<Producto>(action.payload.list, state) };
            return { ...state, entities };
        }
        case fromProductos.LOAD_PRODUCTOS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
    }
    return state;
}
