// Persona
import * as personaConstants from './persona/constants';
import * as personaReducer from './persona/persona.reducer';
// Empresa
import * as empresaConstants from './empresa/constants';
import * as empresaReducer from './empresa/empresa.reducer';
// Sucursal
import * as sucursalConstants from './sucursal/constants';
import * as sucursalReducer from './sucursal/sucursal.reducer';

export const reducers = {
  [personaConstants.entityName]: personaReducer.reducer,
  [empresaConstants.entityName]: empresaReducer.reducer,
  [sucursalConstants.entityName]: sucursalReducer.reducer,
};
