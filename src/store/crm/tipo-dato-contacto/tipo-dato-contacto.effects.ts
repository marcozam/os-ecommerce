import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as fromActions from './tipo-dato-contacto.actions';
// Services
import { TipoDatoContactoService } from 'services/http/crm';

@Injectable()
export class TipoDatoContactoEffects {

  constructor(
    private actions$: Actions,
    private tipoDatoContactoService: TipoDatoContactoService,
  ) { }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadTipoDatoContactosAction),
    concatMap(() => this.tipoDatoContactoService.getList()
      .pipe(
        map(payload => fromActions.LoadTipoDatoContactosSuccessAction({ payload })),
        catchError(payload => of(fromActions.LoadTipoDatoContactosFailAction({ payload })))
      ))
    )
  );
}
