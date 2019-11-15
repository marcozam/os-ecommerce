import { createAction, props } from '@ngrx/store';
import { OS_ACTION_TYPE } from '../models';

export const CREAT_CRUD_ACTION_TYPES = (namespace: string, entityName: string) => ({
  Load : `${namespace} Load All ${entityName}`,
  Delete: `${namespace} Delete ${entityName}`,
  Save: `${namespace} Save ${entityName}`,
  Get: `${namespace} Get ${entityName} By Id`,
});

export const CREATE_ACTION_RUTIN = <I, S, F>(type: string) => ({
  initial: createAction(type, props<{ payload: I}>()),
  success: createAction(`${type} ${OS_ACTION_TYPE.Success}`, props<{ payload: S }>()),
  fail: createAction(`${type} ${OS_ACTION_TYPE.Fail}`, props<{ payload?: F }>()),
});

export const CREAT_CRUD_ACTIONS = <T>(namespace: string, entityName: string) => {
  const TYPES = CREAT_CRUD_ACTION_TYPES(namespace, entityName);
  const { initial: initialLoad, success: successLoad, fail: failLoad } =
    CREATE_ACTION_RUTIN<{}, T[], any>(TYPES.Load);
  const { initial: initialGet, success: successGet, fail: failGet } =
    CREATE_ACTION_RUTIN<number, T, any>(TYPES.Get);
  const { initial: initialSave, success: successSave, fail: failSave } =
    CREATE_ACTION_RUTIN<{ value: T, oldValue?: T}, T, any>(TYPES.Save);
  return {
    initialLoad,
    successLoad,
    failLoad,
    initialGet,
    successGet,
    failGet,
    initialSave,
    successSave,
    failSave
  };
};
