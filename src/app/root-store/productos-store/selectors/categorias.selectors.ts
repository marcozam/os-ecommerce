import { createSelector } from '@ngrx/store';
// State
import { getRouterState } from 'app/root-store/router-state';
import { ProductsModuleState } from '../state';
// Selectors
import { getProductsModuleState } from './state.selectors';
import * as fromSelectors from '../../general.selectors';

export const getCategoriasState = createSelector(
    getProductsModuleState,
    (state: ProductsModuleState) => state.categorias
);

export const getCategoriasLoaded = createSelector(
    getCategoriasState,
    fromSelectors.getLoaded
);

export const getCategoriasLoading = createSelector(
    getCategoriasState,
    fromSelectors.getLoading
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
    (entities, router) => fromSelectors.geSelectedtItem(entities, router, 'categoriaID')
);

export const getStandAloneCategories = createSelector(
    getCategoriasState,
    (state) => fromSelectors.getData(state).filter(item => item.catalogoID === 0)
);

export const getStockCategories = createSelector(
    getCategoriasState,
    (state) => fromSelectors.getData(state).filter(item => item.usaInventario === true)
);
