import { createReducer, on } from '@ngrx/store';
import * as fromMovimientos from './movimientos.action';
import { InventarioState } from './movimientos.entities';

export const initialState: InventarioState = {
  movimientos: [],
  inventario: [],
};

export const movimientosReducer = createReducer(
  initialState,
  on(fromMovimientos.GetInventarioSuccess,
    (state, { payload: inventario }) => ({ ...state, inventario })
  ),
  on(fromMovimientos.GetMovimientosInventarioSuccess,
    (state, { payload: movimientos }) => ({ ...state, movimientos })
  ),
);
