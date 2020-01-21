import { createReducer, on } from '@ngrx/store';
import { categoriasAdapter } from './categorias.entities';
import * as fromCategorias from './categorias.action';

// Models
import { CategoriaProducto } from 'models/productos';

export const initialState = categoriasAdapter.getInitialState({
  loaded: false,
  selected: null
});

export const categoriasReducer = createReducer(
  initialState,
  on(fromCategorias.SaveCategoriaSuccess, fromCategorias.LoadCategoriaByIDSuccess,
    (state, { payload }) => categoriasAdapter.upsertOne(payload, state)
  ),
  on(fromCategorias.LoadAllCategoriasSuccess,
    (state, { payload }) => categoriasAdapter.addAll(payload, state)
  ),
  on(fromCategorias.LoadCategoriasByMarcaIDSuccess,
    (state, { payload }) => categoriasAdapter.upsertMany(payload.list, state)
  ),
);
