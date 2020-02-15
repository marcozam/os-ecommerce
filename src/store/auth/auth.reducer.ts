import { createReducer, on, Action } from '@ngrx/store';
import { AuthModuleState } from './constants';
import * as fromAuth from './auth.action';

const USER_STORAGE_NAME = 'OS_USER';

const initialState: AuthModuleState = {
  user: JSON.parse(sessionStorage.getItem(USER_STORAGE_NAME)),
};

const authReducer = createReducer(
  initialState,
  on(fromAuth.LoginSuccess,
    (state, { payload: user }) => {
      sessionStorage.setItem(USER_STORAGE_NAME, JSON.stringify(user));
      return { ...state, user };
    }
  ),
);

export function reducer(state: AuthModuleState, action: Action) {
  return authReducer(state, action);
}
