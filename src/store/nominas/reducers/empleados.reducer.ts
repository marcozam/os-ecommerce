import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// Models
import { Empleado } from 'models';
// Actions
import * as empleadoActions from '../actions/empleado.actions';

export interface EmpleadosState extends EntityState<Empleado> {
  selectedEmpleadoId: number;
}

export const empleadoAdapter: EntityAdapter<Empleado> = createEntityAdapter<Empleado>();

const initialState: EmpleadosState = {
  ids: [],
  entities: {},
  selectedEmpleadoId: 0,
};

const scoreboardReducer = createReducer(
  initialState,
  on(
    empleadoActions.GetEmpleadoSuccesAction,
    empleadoActions.SaveEmpleadoSuccesAction,
    (state, action) => empleadoAdapter.addOne(action.value, state)
  ),
);

export function reducer(state: EmpleadosState, action: Action) {
  return scoreboardReducer(state, action);
}
