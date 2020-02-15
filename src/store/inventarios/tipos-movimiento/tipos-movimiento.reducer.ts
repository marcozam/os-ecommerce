import { createReducer, on, Action } from '@ngrx/store';
import { tiposMovimientoInventarioAdapter } from './tipos-movimiento.entities';
import * as fromTiposMovimientos from './tipos-movimiento.action';

const initialState = tiposMovimientoInventarioAdapter.getInitialState({
  loaded: false,
  selected: null
});

const reducer = createReducer(
  initialState,
  on(fromTiposMovimientos.SaveTiposMovimientoInventarioSuccess, fromTiposMovimientos.GetTiposMovimientoInventarioByIDSuccess,
    (state, { payload }) => tiposMovimientoInventarioAdapter.upsertOne(payload, state)
  ),
  on(fromTiposMovimientos.GetTiposMovimientoInventarioSuccess,
    (state, { payload }) => tiposMovimientoInventarioAdapter.addAll(payload, { ...state, loaded: true })
  ),
);

export function tiposMovimientoReducer(state, action: Action) {
  return reducer(state, action);
}
