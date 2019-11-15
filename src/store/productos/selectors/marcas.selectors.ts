import { createSelector } from '@ngrx/store';
// State
import { getRouterState } from 'store/state/router.state';
// Selectors
import { PRODUCTOS_ROUTE_STATE_PARAMS } from 'app/private/modules/producto/constants';
import { ProductsModuleState, getProductsModuleState } from '../constants';
import * as fromSelectors from '../../general.selectors';

export const getMarcasState = createSelector(
    getProductsModuleState,
    (state: ProductsModuleState) => state.marcas
);

export const getMarcasLoaded = createSelector(
    getMarcasState,
    fromSelectors.getLoaded
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
    (entities, router) => fromSelectors.geSelectedtItem(entities, router, PRODUCTOS_ROUTE_STATE_PARAMS.MARCA_ID)
);
