// Persona
import * as personaConstants from './persona/constants';
import * as personaReducer from './persona/persona.reducer';
import * as personaState from './persona/persona.entity';
// Empresa
import * as empresaConstants from './empresa/constants';
import * as empresaReducer from './empresa/empresa.reducer';
import * as empresaState from './empresa/empresa.entity';

export interface FeatureState {
    [personaConstants.entityName]: personaState.State;
    [empresaConstants.entityName]: empresaState.State;
}

export const reducers = {
    [personaConstants.entityName]: personaReducer.reducer,
    [empresaConstants.entityName]: empresaReducer.reducer,
};
