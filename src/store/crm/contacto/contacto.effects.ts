import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError } from 'rxjs/operators';
// Actions
import * as fromActions from './contacto.actions';
// Services
import { PersonasService } from 'services/http/base';
import { ContactoService } from 'services/http/crm';

@Injectable()
export class ContactoEffects {

  constructor(
    private actions$: Actions,
    private contactoService: ContactoService,
    private personasService: PersonasService
  ) { }

  search$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SearchContactoAction),
    concatMap(({ payload }) => this.contactoService.getPersonaByName(payload.apellido, payload.nombre)
      .pipe(
        map(payload => fromActions.SearchContactoSuccessAction({ payload })),
        catchError(payload => of(fromActions.SearchContactoFailAction({ payload })))
      ))
    )
  );
}
