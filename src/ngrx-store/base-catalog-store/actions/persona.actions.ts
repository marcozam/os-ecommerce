import { createAction, props } from '@ngrx/store';
import { OS_ACTION_TYPE } from 'ngrx-store/models';
import { Persona } from 'models';

const namespace = '[Base Catalog - Persona]';

const PERSONA_ACTION_TYPES = {
    Save: `${namespace} Save`,
    Get: `${namespace} Get`,
};

export const SavePersonaAction = createAction(
    PERSONA_ACTION_TYPES.Save,
    props<{value: Persona, oldValue: Persona}>()
);
export const SavePersonaSuccesAction = createAction(
    `${PERSONA_ACTION_TYPES.Save} ${OS_ACTION_TYPE.Success}`,
    props<{persona: Persona}>()
);
export const SavePersonaFailtAction = createAction(
    `${PERSONA_ACTION_TYPES.Save} ${OS_ACTION_TYPE.Fail}`
);
