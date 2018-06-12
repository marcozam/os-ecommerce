import { createSelector } from '@ngrx/store';
// State
import { getRouterState } from 'app/root-store/router-state';
import { ProductsModuleState } from '../state';
// Selectors
import { getProductsModuleState } from './state.selectors';
import * as fromSelectors from '../../general.selectors';

export const getMarcasState = createSelector(
    getProductsModuleState,
    (state: ProductsModuleState) => state.marcas
);

export const getMarcasLoaded = createSelector(
    getMarcasState,
    fromSelectors.getLoaded
);

export const getMarcasLoading = createSelector(
    getMarcasState,
    fromSelectors.getLoading
);

export const getMarcasEntities = createSelector(
    getMarcasState,
    fromSelectors.getEntities
);

export const getAllMarcas = createSelector(
    getMarcasState,
    fromSelectors.getData
);

export const getMarcas = createSelector(
    getMarcasState,
    (data) => fromSelectors.getData(data).filter(item => item.key !== 0)
);

export const getSelectedMarca = createSelector(
    getMarcasEntities,
    getRouterState,
    (entities, router) => fromSelectors.geSelectedtItem(entities, router, 'marcaId')
);
