import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
// Constants
import { MessageCode } from 'app/constants';
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
                        new marcasActions.LoadMarcaByIDFail(MessageCode.ITEM_NOT_FOUND);
                }),
                catchError(() => of(new marcasActions.LoadMarcaByIDFail(MessageCode.GENERAL_ERROR)))
            );
        })
    );

    @Effect()
    saveMarca$ = this.actions$.ofType( marcasActions.MarcasActionTypes.SAVE_MARCA)
        .pipe(
            switchMap((action: marcasActions.SaveMarca) => {
                return this.service.save(action.newItem, action.oldItem).pipe(
                    map(item => new marcasActions.SaveMarcaSuccess(item, MessageCode.ITEM_SAVED)),
                    catchError(() => of(new marcasActions.SaveMarcaFail(MessageCode.GENERAL_ERROR)))
                );
            })
        );
}
