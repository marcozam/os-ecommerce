import { createReducer, on, Action } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
// Models
import { Empleado } from 'models';
// Actions
import * as empleadoActions from '../actions/empleado.actions';

export interface EmpleadosState extends EntityState<Empleado> {
  selectedEmpleadoId: number;
}

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
    (state, action) => {
      const empleado = action.value;
      return { ...state };
    }
  ),
);

export function reducer(state: EmpleadosState, action: Action) {
  return scoreboardReducer(state, action);
}
