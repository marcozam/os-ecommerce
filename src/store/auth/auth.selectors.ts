import { createSelector } from '@ngrx/store';
import { getAuthModuleState, AuthModuleState } from './constants';
import { User } from 'models/auth';

export const getUser = createSelector(
  getAuthModuleState, (state: AuthModuleState) => state.user
);

export const getUserId = createSelector(
  getUser, (user: User) => user.key
);

export const getUserPersona = createSelector(
  getUser, (user: User) => user.datosPersonales
);
