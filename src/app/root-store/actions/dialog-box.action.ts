import { Action } from '@ngrx/store';

// CONSTANTS
export enum DialogBoxActionTypes {
    OPEN_DIALOG = '[DialogBox] Open Dialog',
    CLOSE_DIALOG = '[DialogBox] Close Dialog',
}

// ACTIONS
export class OpenDialog implements Action {
    readonly type = DialogBoxActionTypes.OPEN_DIALOG;
    constructor(public message: string) { }
}
export class CloseDialog implements Action {
    readonly type = DialogBoxActionTypes.CLOSE_DIALOG;
}

export type DialogBoxAction = OpenDialog | CloseDialog;
