import { Action } from '@ngrx/store';

// CONSTANTS
export enum LOADING_ACTION_TYPES {
    SHOW_SPINNER = '[Loader] Show',
    HIDE_SPINNER = '[Loader] Hide',
    START_REQUEST = '[Loader] Start request',
    END_REQUEST = '[Loader] End request'
}

// ACTIONS
export class ShowSpinner implements Action {
    readonly type = LOADING_ACTION_TYPES.SHOW_SPINNER;
}

export class HideSpinner implements Action {
    readonly type = LOADING_ACTION_TYPES.HIDE_SPINNER;
}

export class StartRequest implements Action {
    readonly type = LOADING_ACTION_TYPES.START_REQUEST;
}

export class EndRequest implements Action {
    readonly type = LOADING_ACTION_TYPES.END_REQUEST;
}

export type LoadingAction = ShowSpinner | HideSpinner | StartRequest | EndRequest;
