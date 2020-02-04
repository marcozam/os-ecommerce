import { createFeatureSelector } from '@ngrx/store';
// Persona
import * as personaConstants from './persona/constants';
import * as personaState from './persona/persona.entity';
// Empresa
import * as empresaConstants from './empresa/constants';
import * as empresaState from './empresa/empresa.entity';
// Sucursal
import * as sucursalConstants from './sucursal/constants';
import * as sucursalState from './sucursal/sucursal.entity';

export const namespace = '[Base Catalogs]';
export const featureName = 'baseCatalog';

export interface BaseCatalogsModuleState {
  [personaConstants.entityName]: personaState.State;
  [empresaConstants.entityName]: empresaState.State;
  [sucursalConstants.entityName]: sucursalState.State;
}

export const selectBaseCatalogsModuleState = createFeatureSelector<BaseCatalogsModuleState>(featureName);
