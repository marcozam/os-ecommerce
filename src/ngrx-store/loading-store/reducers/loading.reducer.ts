import * as fromState from '../state';
import * as loadingActions from '../actions/loading.action';

export const initialState: fromState.LoadingModuleState = {
    loading: false,
    requests: 0
};

export function reducer(
    state = initialState,
    action: loadingActions.LoadingAction
): fromState.LoadingModuleState {
    switch (action.type) {
        case loadingActions.LOADING_ACTION_TYPES.SHOW_SPINNER: {
            return { ...state, loading: true };
        }
        case loadingActions.LOADING_ACTION_TYPES.HIDE_SPINNER: {
            return { ...state, loading: false };
        }
        case loadingActions.LOADING_ACTION_TYPES.START_REQUEST: {
            return { ...state, requests: state.requests + 1 };
        }
        case loadingActions.LOADING_ACTION_TYPES.END_REQUEST: {
            return { ...state, requests: state.requests - 1 };
        }
    }
    return state;
}
