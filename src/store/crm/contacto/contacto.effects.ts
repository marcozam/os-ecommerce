import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as fromActions from './contacto.actions';
import { PersonasService } from 'services/http/base';

@Injectable()
export class ContactoEffects {
  /*
  save$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SavePersonaAction),
    concatMap(({ payload }) => this.personasService.save(payload.value, payload.oldValue)
      .pipe(
        map(payload => fromActions.SavePersonaSuccessAction({ payload })),
        catchError(() => of(fromActions.SavePersonaFailAction({ payload: '' })))
      ))
    )
  );
  */

  constructor(
    private actions$: Actions,
    private personasService: PersonasService
  ) { }
}
