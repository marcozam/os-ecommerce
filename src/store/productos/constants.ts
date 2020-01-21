import { createFeatureSelector } from '@ngrx/store';
// States
import { MarcasState } from './marcas/marcas.entities';
import { ProducstosState } from './productos/productos.entities';
import { CategoriasState } from './categorias/categorias.entities';

export interface ProductsModuleState {
  productos: ProducstosState;
  categorias: CategoriasState;
  marcas: MarcasState;
}

export const namespace = '[Productos]';
export const featureName = 'products';
export const getProductsModuleState = createFeatureSelector<ProductsModuleState>(featureName);
