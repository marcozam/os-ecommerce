import { createSelector } from '@ngrx/store';
// Models
import { Producto } from 'models/productos';

import { ProductsModuleState, getProductsModuleState } from '../constants';
import { productosAdapter } from './productos.entities';
// Selectors
import { PRODUCTOS_ROUTE_STATE_PARAMS } from 'app/private/modules/producto/constants';
import * as fromRoot from 'store/state/router.state';

export const selectProductosState = createSelector(
  getProductsModuleState, (state: ProductsModuleState) => state.productos
);

export const {
  selectEntities: selectProductosEntities,
  selectAll: selectAllProductos,
} = productosAdapter.getSelectors(selectProductosState);

export const selectProductosLoaded = createSelector(
  selectProductosState, state => state.loaded
);

export const selectSelectedProductoId = createSelector(
  selectProductosState, state => state.selected
);

export const selectSelectedProducto = createSelector(
  selectProductosEntities,
  selectSelectedProductoId,
  (entities, key) => entities[key]
);

export const selectProductosByCategoria = createSelector(
  selectAllProductos,
  fromRoot.getRouterState,
  (list, router): Producto[] => {
    const ID = Number(router.state.params[PRODUCTOS_ROUTE_STATE_PARAMS.CATEGORIA_ID]);
    if (!isNaN(ID)) { return list.filter(item => item.categoriaProductoID === ID); }
  }
);
