import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as personaActions from '../actions/persona.actions';
import { PersonasService } from 'services/http/base';

@Injectable()
export class PersonaEffects {
  save$ = createEffect(() => this.actions$.pipe(
    ofType(personaActions.SavePersonaAction),
    concatMap((action) => this.personasService.save(action.value, action.oldValue)
      .pipe(
        map(persona => personaActions.SavePersonaSuccesAction({ persona })),
        catchError(() => of(personaActions.SavePersonaFailtAction()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private personasService: PersonasService
  ) { }
}
