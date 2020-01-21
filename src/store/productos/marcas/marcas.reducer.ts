import { createReducer, on } from '@ngrx/store';
import { marcasAdapter } from './marcas.entities';
import * as fromMarcas from './marcas.action';

export const initialState = marcasAdapter.getInitialState({
  loaded: false,
  selected: null
});

export const marcasReducer = createReducer(
  initialState,
  on(fromMarcas.SaveMarcaSuccess, fromMarcas.LoadMarcaByIDSuccess,
    (state, { payload }) => marcasAdapter.upsertOne(payload, state)
  ),
  on(fromMarcas.LoadMarcasSuccess,
    (state, { payload }) => marcasAdapter.addAll(payload, state)
  ),
  // TODO: Move to Categorias
  /*
  on(fromMarcas.LoadCategoriasByMarcaIDSuccess,
    (state, { payload }) => marcasAdapter.upsertMany(payload.list, state)
  ),
  */
);
