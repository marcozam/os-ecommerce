import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { tap } from 'rxjs/operators';
// Actions
import * as dialogBoxActions from '../actions/dialog-box.action';
// Services
import { DialogBoxService } from 'app/services/dialog-box.service';

@Injectable()
export class DialogBoxEffects {
    constructor(
        private actions$: Actions,
        private service: DialogBoxService
    ) { }

    @Effect()
    OpenDialog$ = this.actions$.ofType(dialogBoxActions.DialogBoxActionTypes.OPEN_DIALOG)
        .pipe(
            tap((action: dialogBoxActions.OpenDialog) => {
                this.service.openDialog('This is a test', action.message, false);
            })
        );
}
