import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';
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
    loadMarcas$ = this.actions$.ofType(marcasActions.LOAD_MARCAS).pipe(
        switchMap(() => {
            return this.service.getList().pipe(
                map(list => new marcasActions.LoadMarcasSuccess(list)),
                catchError(error => of(new marcasActions.LoadMarcasFail(error)))
            );
        })
    );
}
