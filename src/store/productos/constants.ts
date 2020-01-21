import { createFeatureSelector } from '@ngrx/store';
import { ProducstosState } from './productos/productos.entities';
// TODO: Replae with new States
import * as fromState from '../general.states';
import { CategoriaProducto, MarcaProducto } from 'models/productos';

export interface ProductsModuleState {
  productos: ProducstosState;
  categorias: fromState.GeneralListState<CategoriaProducto>;
  marcas: fromState.GeneralListState<MarcaProducto>;
}

export const namespace = '[Productos]';
export const featureName = 'products';
export const getProductsModuleState = createFeatureSelector<ProductsModuleState>(featureName);
