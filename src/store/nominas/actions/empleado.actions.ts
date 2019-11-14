import { createAction, props } from '@ngrx/store';
import { OS_ACTION_TYPE } from '../../models';
import { namespace } from '../constants';
// Models
import { Empleado } from 'models';

const EMPLEADO_ACTION_TYPES = {
  Save: `${namespace} Save`,
  Get: `${namespace} Get`,
};

export const SaveEmpleadoAction = createAction(
  EMPLEADO_ACTION_TYPES.Save,
  props<{value: Empleado, oldValue: Empleado}>()
);

export const SaveEmpleadoSuccesAction = createAction(
  `${EMPLEADO_ACTION_TYPES.Save} ${OS_ACTION_TYPE.Success}`,
  props<{value: Empleado}>()
);

export const SaveEmpleadoFailtAction = createAction(
  `${EMPLEADO_ACTION_TYPES.Save} ${OS_ACTION_TYPE.Fail}`
);

export const GetEmpleadoAction = createAction(
  EMPLEADO_ACTION_TYPES.Get,
  props<{key: number}>()
);

export const GetEmpleadoSuccesAction = createAction(
  `${EMPLEADO_ACTION_TYPES.Get} ${OS_ACTION_TYPE.Success}`,
  props<{value: Empleado}>()
);

export const GetEmpleadoFailtAction = createAction(
  `${EMPLEADO_ACTION_TYPES.Get} ${OS_ACTION_TYPE.Fail}`
);
