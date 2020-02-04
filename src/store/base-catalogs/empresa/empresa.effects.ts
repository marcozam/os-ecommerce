import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as fromActions from './empresa.actions';
import { EmpresasService } from 'services/http/base';

@Injectable()
export class EmpresaEffects {

  constructor(
    private actions$: Actions,
    private empresasService: EmpresasService
  ) { }

  save$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SaveEmpresaAction),
    concatMap(({ payload }) => this.empresasService.save(payload.value, payload.oldValue)
      .pipe(
        map(payload => fromActions.SaveEmpresaSuccessAction({ payload })),
        catchError(() => of(fromActions.SaveEmpresaFailAction({ payload: '' })))
      ))
    )
  );
}
