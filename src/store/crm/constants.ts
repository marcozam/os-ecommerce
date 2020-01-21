import { createFeatureSelector } from '@ngrx/store';
// import { ProducstosState } from './productos/productos.entities';

export interface ContactsModuleState {
  // contactos: ProducstosState;
}

export const namespace = '[Contactos]';
export const featureName = 'contacts';
export const getProductsModuleState = createFeatureSelector<ContactsModuleState>(featureName);
