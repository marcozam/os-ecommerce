import { createReducer, on, Action } from '@ngrx/store';
import { adapter, State } from './persona.entities';
import * as fromActions from './persona.actions';

export const initialState: State = adapter.getInitialState({
  loaded: false,
  selected: null,
});

const _reducer = createReducer(
  initialState,
  on(
    fromActions.SavePersonaSuccessAction,
    fromActions.GetPersonaSuccessAction,
    (state, { payload }) => adapter.upsertOne(payload, { ...state, selected: payload.key })
  ),
  on(fromActions.LoadPersonasSuccessAction,
    (state, { payload }) => adapter.addAll(payload, { ...state, loaded: true })
  ),
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}
