import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  EstablecerCiclosEscolares,
  EstablecerPlanteles,
  EstablecerSeccionesEscolares,
  SeleccionarCicloEscolar,
  SeleccionarPlantel,
} from './school.actions';
import { CicloEscolar, SeccionEscolar, Plantel } from '../models';

const cicloEscolarAdapter = createEntityAdapter<CicloEscolar>({ selectId: item => item.uuid });
const plantelAdapter = createEntityAdapter<Plantel>({ selectId: item => item.uuid });

export interface SchoolState {
  seccionesEscolares: SeccionEscolar[];
  ciclosEscolares: EntityState<CicloEscolar>;
  planteles: EntityState<Plantel>;
  cicloActual?: string;
  cicloSeleccionado?: string;
  plantelSeleccionado?: string;
}

const initialState: SchoolState = {
  seccionesEscolares: [],
  planteles: plantelAdapter.getInitialState(),
  ciclosEscolares: cicloEscolarAdapter.getInitialState(),
};

const schoolReducer = createReducer<SchoolState>(initialState,
  on(EstablecerCiclosEscolares,
    (state, { payload }) => ({
      ...state,
      ciclosEscolares: cicloEscolarAdapter.addAll(payload, state.ciclosEscolares),
    })),
  on(EstablecerPlanteles,
    (state, { payload }) => ({
      ...state,
      planteles: cicloEscolarAdapter.addAll(payload, state.planteles),
    })),
  on(EstablecerSeccionesEscolares,
    (state, { payload }) => ({
      ...state,
      seccionesEscolares: payload,
    })),
  on(SeleccionarCicloEscolar,
    (state, { payload }) => ({
      ...state,
      cicloSeleccionado: payload,
    })),
  on(SeleccionarPlantel,
    (state, { payload }) => ({
      ...state,
      plantelSeleccionado: payload,
    }))
);
