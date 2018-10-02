import { ActionReducerMap } from '@ngrx/store';

import * as fromState from '../state';
// Reducers
import * as fromProductos from '../reducers/productos.reducer';
import * as fromCategorias from '../reducers/categorias.reducer';
import * as fromMarcas from '../reducers/marcas.reducer';

export const reducers: ActionReducerMap<fromState.ProductsModuleState> = {
    productos: fromProductos.reducer,
    categorias: fromCategorias.reducer,
    marcas: fromMarcas.reducer,
};
