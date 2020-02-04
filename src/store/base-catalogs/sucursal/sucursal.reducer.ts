import { createReducer, on, Action } from '@ngrx/store';
import { adapter, State } from './sucursal.entity';
import * as fromActions from './sucursal.actions';

export const initialState: State = adapter.getInitialState({
  loaded: false,
  selected: 1, // Get it from local storage
});

const _reducer = createReducer(
  initialState,
  on(
    fromActions.GetSucursalSuccessAction,
    fromActions.SaveSucursalSuccessAction,
    (state, { payload }) => adapter.upsertOne(payload, state)
  ),
  on(fromActions.LoadSucursalesSuccessAction,
    (state, { payload }) => adapter.addAll(payload, { ...state, loaded: true })
  ),
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}
