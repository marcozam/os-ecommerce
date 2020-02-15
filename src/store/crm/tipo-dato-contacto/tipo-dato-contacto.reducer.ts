import { createReducer, on, Action } from '@ngrx/store';
import { tipoDatoContactoAdapter, TipoDatoContactoState } from './tipo-dato-contacto.entities';
import * as fromActions from './tipo-dato-contacto.actions';

const initialState: TipoDatoContactoState = tipoDatoContactoAdapter.getInitialState({
  loaded: false
});

const reducer = createReducer(
  initialState,
  on(fromActions.SaveTipoDatoContactoSuccessAction, fromActions.GetTipoDatoContactoSuccessAction,
    (state, { payload }) => tipoDatoContactoAdapter.upsertOne(payload, state)
  ),
  on(fromActions.LoadTipoDatoContactosSuccessAction,
    (state, { payload }) => tipoDatoContactoAdapter.addAll(payload, { ...state, loaded: true })
  ),
);

export function tipoDatoContactoReducer(state: TipoDatoContactoState, action: Action) {
  return reducer(state, action);
}
