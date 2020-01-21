import { createSelector } from '@ngrx/store';
// State
import { getRouterState } from 'store/state/router.state';
// Selectors
import { PRODUCTOS_ROUTE_STATE_PARAMS } from 'app/private/modules/producto/constants';
import { getProductsModuleState, ProductsModuleState } from '../constants';
import * as fromSelectors from '../../general.selectors';

export const getCategoriasState = createSelector(
    getProductsModuleState,
    (state: ProductsModuleState) => state.categorias
);

export const getCategoriasLoaded = createSelector(
    getCategoriasState,
    fromSelectors.getLoaded
);

export const getCategoriasEntities = createSelector(
    getCategoriasState,
    fromSelectors.getEntities
);

export const getAllCategories = createSelector(
    getCategoriasState,
    fromSelectors.getData
);

export const getSelectedCategoria = createSelector(
    getCategoriasEntities,
    getRouterState,
    (entities, router) => fromSelectors.geSelectedtItem(entities, router, PRODUCTOS_ROUTE_STATE_PARAMS.CATEGORIA_ID)
);

export const getStandAloneCategories = createSelector(
    getCategoriasState,
    (state) => fromSelectors.getData(state).filter(item => !item.catalogoID)
);

export const getStockCategories = createSelector(
    getCategoriasState,
    (state) => fromSelectors.getData(state).filter(item => item.usaInventario === true)
);
