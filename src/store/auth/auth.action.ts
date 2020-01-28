import { CREATE_ACTION_RUTIN } from '../helpers';
import { namespace } from './constants';
// Models
import { User } from 'models';

// Actions
export const {
  initial: Login,
  success: LoginSuccess,
  fail: LoginFail
} = CREATE_ACTION_RUTIN<{ userName: string, password: string }, User, any>(`${namespace} Login`);
