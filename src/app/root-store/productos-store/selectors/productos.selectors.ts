import { createSelector } from '@ngrx/store';
// Models
import { ProductsModuleState } from '../state';
import { Producto } from 'app/models/productos';
// Selectors
import { PRODUCTOS_ROUTE_STATE_PARAMS } from 'app/modules/producto/constants';
import { getProductsModuleState } from './state.selectors';
import * as fromSelectors from '../../general.selectors';
import * as fromRoot from 'app/root-store/state/router.state';

export const getProductosState = createSelector(
    getProductsModuleState,
    (state: ProductsModuleState) => state.productos
);
export const getProductosLoaded = createSelector(
    getProductosState,
    fromSelectors.getLoaded
);
export const getProductossLoading = createSelector(
    getProductosState,
    fromSelectors.getLoading
);

export const getProductosEntities = createSelector(
    getProductosState,
    fromSelectors.getEntities
);

export const getAllProductos = createSelector(
    getProductosState,
    fromSelectors.getData
);

export const getSelectedProducto = createSelector(
    getProductosEntities,
    fromRoot.getRouterState,
    (entities, router) => fromSelectors.geSelectedtItem(entities, router, PRODUCTOS_ROUTE_STATE_PARAMS.PRODUCTO_ID)
);

export const getProductosBySelectedCategory = createSelector(
    getAllProductos,
    fromRoot.getRouterState,
    (list, router): Producto[] => {
        const ID = router.state.params.categoryId;
        if (!isNaN(ID)) { return list.filter(item => item.categoriaProductoID === Number(ID)); }
    }
);
