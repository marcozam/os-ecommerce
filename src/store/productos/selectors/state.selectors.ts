import { createFeatureSelector } from '@ngrx/store';
import { ProductsModuleState } from '../state';
export const getProductsModuleState = createFeatureSelector<ProductsModuleState>('products');
