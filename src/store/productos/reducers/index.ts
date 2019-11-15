import { ActionReducerMap } from '@ngrx/store';

import { ProductsModuleState } from '../constants';
// Reducers
import * as fromProductos from '../productos/productos.reducer';
import * as fromCategorias from '../reducers/categorias.reducer';
import * as fromMarcas from '../reducers/marcas.reducer';

export const reducers: ActionReducerMap<ProductsModuleState> = {
    productos: fromProductos.reducer,
    categorias: fromCategorias.reducer,
    marcas: fromMarcas.reducer,
};
