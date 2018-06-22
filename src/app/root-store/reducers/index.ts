import { ActionReducerMap } from '@ngrx/store';

import * as fromState from '../state';
// Reducers
import * as fromDialogBox from '../reducers/dialog-box.reducer';


export const reducers: ActionReducerMap<fromState.StandAloneRootState> = {
    dialog: fromDialogBox.reducer
};
