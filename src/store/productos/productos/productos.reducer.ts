import { createReducer, on, Action } from '@ngrx/store';
import { ProducstosState, productosAdapter } from './productos.entities';
import * as fromProductos from './productos.action';

export const initialState = productosAdapter.getInitialState({
  loaded: false,
  selected: null
});

export const productosReducer = createReducer(
  initialState,
  on(fromProductos.SaveProductoSuccess, fromProductos.LoadProductoByIDSuccess,
    (state, { payload }) => productosAdapter.upsertOne(payload, state)
  ),
  on(fromProductos.LoadProductosSuccess,
    (state, { payload }) => productosAdapter.addAll(payload, state)
  ),
  on(fromProductos.LoadProductosByCategoryIDSuccess,
    (state, { payload }) => productosAdapter.upsertMany(payload.list, state)
  ),
);
