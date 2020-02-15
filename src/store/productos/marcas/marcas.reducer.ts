import { createReducer, on, Action } from '@ngrx/store';
import { marcasAdapter } from './marcas.entities';
import * as fromMarcas from './marcas.action';

const initialState = marcasAdapter.getInitialState({
  loaded: false,
  selected: null
});

const reducer = createReducer(
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


export function marcasReducer(state, action: Action) {
  return reducer(state, action);
}
