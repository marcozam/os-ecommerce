import * as fromState from '../general.states';
import { Producto, CategoriaProducto, MarcaProducto } from 'models/productos';

export interface ProductsModuleState {
    productos: fromState.GeneralListState<Producto>;
    categorias: fromState.GeneralListState<CategoriaProducto>;
    marcas: fromState.GeneralListState<MarcaProducto>;
}
