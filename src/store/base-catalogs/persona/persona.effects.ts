import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as fromActions from './persona.actions';
// Services
import { PersonasService } from 'services/http/base';

@Injectable()
export class PersonaEffects {

  constructor(
    private actions$: Actions,
    private service: PersonasService
  ) { }

  save$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SavePersonaAction),
    concatMap(({ payload }) => this.service.save(payload.value, payload.oldValue)
      .pipe(
        map(payload => fromActions.SavePersonaSuccessAction({ payload })),
        catchError(() => of(fromActions.SavePersonaFailAction({ payload: '' })))
      ))
    )
  );

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GetPersonaAction),
    concatMap(({ payload }) => this.service.getByID(payload)
      .pipe(
        map(payload => fromActions.GetPersonaSuccessAction({ payload })),
        catchError(payload => of(fromActions.GetPersonaFailAction({ payload })))
      ))
    )
  );
}
