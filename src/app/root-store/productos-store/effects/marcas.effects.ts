import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
// Constants
import { ITEM_NOT_EXIST_ERROR_MESSAGE } from 'app/constants/messages.contants';
// Actions
import * as marcasActions from '../actions/marcas.action';
// Services
import { MarcaProductoService } from 'app/services/productos';

@Injectable()
export class MarcasEffects {
    constructor(
        private actions$: Actions,
        private service: MarcaProductoService
    ) { }

    @Effect()
    loadMarcas$ = this.actions$.ofType(marcasActions.MarcasActionTypes.LOAD_MARCAS).pipe(
        switchMap(() => {
            return this.service.getList().pipe(
                map(list => new marcasActions.LoadMarcasSuccess(list)),
                catchError(error => of(new marcasActions.LoadMarcasFail(error)))
            );
        })
    );

    @Effect()
    loadMarcasByID$ = this.actions$.ofType(marcasActions.MarcasActionTypes.LOAD_MARCA_BY_ID).pipe(
        switchMap((action: marcasActions.LoadMarcaByID) => {
            return this.service.getByID(action.payload).pipe(
                map((item: any) => {
                    return item ?
                        new marcasActions.LoadMarcaByIDSuccess(item) :
                        new marcasActions.LoadMarcaByIDFail(ITEM_NOT_EXIST_ERROR_MESSAGE);
                }),
                catchError(error => of(new marcasActions.LoadMarcasFail(error)))
            );
        })
    );
}
