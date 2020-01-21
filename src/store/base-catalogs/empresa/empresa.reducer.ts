import { createReducer, on, Action } from '@ngrx/store';
import { adapter, State } from './empresa.entity';
import * as fromActions from './empresa.actions';

export const initialState: State = adapter.getInitialState({
    loaded: false
});

const _reducer = createReducer(
    initialState,
    on(
        fromActions.SaveEmpresaSuccessAction,
        fromActions.GetEmpresaSuccessAction,
        (state, { payload }) => adapter.upsertOne(payload, state)
    ),
    on(fromActions.LoadEmpresasSuccessAction,
        (state, { payload }) => adapter.addAll(payload, { ...state, loaded: true })
    ),
);

export function reducer(state: State, action: Action) {
    return _reducer(state, action);
}
