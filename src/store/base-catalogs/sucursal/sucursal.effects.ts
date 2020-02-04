import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as fromActions from './sucursal.actions';
import { SucursalesService } from 'services/http/base';

@Injectable()
export class SucursalEffects {

  constructor(
    private actions$: Actions,
    private service: SucursalesService
  ) { }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadSucursalesAction),
    concatMap(() => this.service.getList()
      .pipe(
        map(payload => fromActions.LoadSucursalesSuccessAction({ payload })),
        catchError(payload => of(fromActions.LoadSucursalesFailAction({ payload })))
      ))
    )
  );
}
