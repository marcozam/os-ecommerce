import { createReducer, on } from '@ngrx/store';
import { tiposMovimientoInventarioAdapter } from './tipos-movimiento.entities';
import * as fromTiposMovimientos from './tipos-movimiento.action';

export const initialState = tiposMovimientoInventarioAdapter.getInitialState({
  loaded: false,
  selected: null
});

export const tiposMovimientoReducer = createReducer(
  initialState,
  on(fromTiposMovimientos.SaveTiposMovimientoInventarioSuccess, fromTiposMovimientos.GetTiposMovimientoInventarioByIDSuccess,
    (state, { payload }) => tiposMovimientoInventarioAdapter.upsertOne(payload, state)
  ),
  on(fromTiposMovimientos.GetTiposMovimientoInventarioSuccess,
    (state, { payload }) => tiposMovimientoInventarioAdapter.addAll(payload, { ...state, loaded: true })
  ),
);
