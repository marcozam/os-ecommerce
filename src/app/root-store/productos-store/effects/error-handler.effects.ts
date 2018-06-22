import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJs
import { tap, filter } from 'rxjs/operators';
// Actions
import * as categoriasActions from '../actions/categorias.action';
import { DialogBoxService } from 'app/services/dialog-box.service';

@Injectable()
export class ErrorHandlerEffects {
    constructor(
        private actions$: Actions,
        private service: DialogBoxService,
    ) { }

    @Effect({
        dispatch: false
    })
    LoadCategoriaByIDFail$ = this.actions$.ofType(categoriasActions.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID_FAIL)
        .pipe(
            filter((action: categoriasActions.LoadCategoriaByIDFail) => action.error.isHandled),
            tap((action: categoriasActions.LoadCategoriaByIDFail) => {
                this.service.openDialog(action.error.title, action.error.message);
            })
        );
}
