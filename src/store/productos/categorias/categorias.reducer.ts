import { createReducer, on, Action } from '@ngrx/store';
import { categoriasAdapter } from './categorias.entities';
import * as fromCategorias from './categorias.action';

// Models
import { CategoriaProducto } from 'models/productos';

const initialState = categoriasAdapter.getInitialState({
  loaded: false,
  selected: null
});

const reducer = createReducer(
  initialState,
  on(fromCategorias.SaveCategoriaSuccess, fromCategorias.LoadCategoriaByIDSuccess,
    (state, { payload }) => categoriasAdapter.upsertOne(payload, state)
  ),
  on(fromCategorias.LoadAllCategoriasSuccess,
    (state, { payload }) => categoriasAdapter.addAll(payload, { ...state, loaded: true})
  ),
  on(fromCategorias.LoadCategoriasByMarcaIDSuccess,
    (state, { payload }) => categoriasAdapter.upsertMany(payload.list, state)
  ),
);

export function categoriasReducer(state, action: Action) {
  return reducer(state, action);
}
