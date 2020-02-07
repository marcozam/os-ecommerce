import { createFeatureSelector } from '@ngrx/store';
import { ContactoState } from './contacto';
import { TipoDatoContactoState } from './tipo-dato-contacto';

export interface CRMModuleState {
  contactos: ContactoState;
  tipoDatoContacto: TipoDatoContactoState;
}

export const namespace = '[CRM]';
export const featureName = 'CRM';

export const selectCRMModuleState = createFeatureSelector<CRMModuleState>(featureName);
