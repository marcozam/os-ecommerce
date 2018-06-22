import * as fromDialogBox from '../actions/dialog-box.action';

export const initialState = {
    opened: false
};

export function reducer(
    state = initialState,
    action: fromDialogBox.DialogBoxAction
): any {
    switch (action.type) {
        case fromDialogBox.DialogBoxActionTypes.OPEN_DIALOG: {
            return { ...state, opened: true };
        }
        case fromDialogBox.DialogBoxActionTypes.CLOSE_DIALOG: {
            return { ...state, opened: false };
        }
    }
    return state;
}
