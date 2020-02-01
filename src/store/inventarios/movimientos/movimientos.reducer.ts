import { createReducer, on } from '@ngrx/store';
import * as fromMovimientos from './movimientos.action';
import { MovimientosInventarioState } from './movimientos.entities';

export const initialState: MovimientosInventarioState = {
  list: [],
};

export const movimientosReducer = createReducer(
  initialState,
  on(fromMovimientos.GetMovimientosInventarioSuccess,
    (state, { payload: list }) => ({ ...state, list })
  ),
);
