import { createFeatureSelector } from '@ngrx/store';
import { ContactoState } from './contacto';

export interface CRMModuleState {
  contactos: ContactoState;
}

export const namespace = '[CRM]';
export const featureName = 'CRM';

export const getCRMModuleState = createFeatureSelector<CRMModuleState>(featureName);
