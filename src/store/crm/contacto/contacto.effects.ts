import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import { GetPersonaAction } from '../../base-catalogs';
import * as fromStore from '../index';
// RxJS
import { of } from 'rxjs';
import { concatMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
// Actions
import * as fromActions from './contacto.actions';
// Services
import { PersonasService } from 'services/http/base';
import { ContactoService, DatosContactoService } from 'services/http/crm';

@Injectable()
export class ContactoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<fromStore.CRMModuleState>,
    private contactoService: ContactoService,
    // private personasService: PersonasService,
    // private datosContactoService: DatosContactoService,
  ) { }

  // private readonly selectedContacto$ = this.store$.select(fromStore.selectSelectedContacto);

  search$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SearchContactoAction),
    concatMap(({ payload }) => this.contactoService.getPersonaByName(payload.apellido, payload.nombre)
      .pipe(
        map(payload => fromActions.SearchContactoSuccessAction({ payload })),
        catchError(payload => of(fromActions.SearchContactoFailAction({ payload })))
      ))
    )
  );

  getById$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GetContactoAction),
    concatMap(({ payload }) => this.contactoService.getByID(payload)
      .pipe(
        map(payload => fromActions.GetContactoSuccessAction({ payload })),
        catchError(payload => of(fromActions.GetContactoFailAction({ payload })))
      ))
    )
  );

  loadDatosContacto$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadDatosContactoAction),
    concatMap(({ payload }) => this.contactoService.getDatosContactoByID(payload)
      .pipe(
        map(payload => fromActions.LoadDatosContactoSuccessAction({ payload })),
        catchError(payload => of(fromActions.LoadDatosContactoFailAction({ payload })))
      ))
    )
  );

  getByIdSuccess$ = createEffect(() => this.actions$.pipe(
      ofType(fromActions.GetContactoSuccessAction),
      map(({ payload: contacto }) => {
        const { referenceID: payload } = contacto;
        this.store$.dispatch(GetPersonaAction({ payload }));
      })
    ), { dispatch: false });
}
