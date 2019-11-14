import { createAction, props } from '@ngrx/store';
import { OS_ACTION_TYPE } from '../models';

export const CREAT_CRUD_ACTION_TYPES = (namespace: string, entityName: string) => ({
  Load : `${namespace} Load All ${entityName}`,
  Delete: `${namespace} Delete ${entityName}`,
  Save: `${namespace} Save ${entityName}`,
  Get: `${namespace} Get ${entityName} By Id`,
});

export const CREATE_ACTION_RUTIN = <S, F, I>(type: string, initialType = false) => {
  return [
    initialType ? createAction(type, props<{ payload: I}>()) : createAction(type),
    createAction(`${type} ${OS_ACTION_TYPE.Success}`, props<{ payload: S }>()),
    createAction(`${type} ${OS_ACTION_TYPE.Fail}`, props<{ payload?: F }>()),
  ];
};

export const CREAT_CRUD_ACTIONS = <T>(namespace: string, entityName: string) => {
  const TYPES = CREAT_CRUD_ACTION_TYPES(namespace, entityName);
  return [
    ...CREATE_ACTION_RUTIN<T[], any, {}>(TYPES.Load),
    ...CREATE_ACTION_RUTIN<T, any, number>(TYPES.Get, true),
    ...CREATE_ACTION_RUTIN<T, any, { value: T, oldValue?: T}>(TYPES.Save, true),
  ];
};
