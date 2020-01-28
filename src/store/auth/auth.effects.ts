import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// NgRx Effects
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { map, tap, catchError, concatMap } from 'rxjs/operators';
// Actions
import * as authActions from './auth.action';
import * as loadingActions from '../loading-store/actions';
// Services
import { AuthService } from 'services/http/auth';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private service: AuthService,
  ) { console.log('AuthEffects'); }

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.Login),
      map(() => new loadingActions.StartRequest()),
    ));

  endRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        authActions.LoginSuccess,
        authActions.LoginFail,
      ),
      map(() => new loadingActions.EndRequest()),
  ));

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.Login),
      concatMap(({ payload }) => this.service.login(payload.userName, payload.password).pipe(
        map(payload => payload ?
          authActions.LoginSuccess({ payload }) :
          authActions.LoginFail({ payload })),
        catchError(error => of(authActions.LoginFail({ payload: error }))),
      ))));

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.LoginSuccess),
      tap(() => this.router.navigate(['secure']))
    ), { dispatch: false });
}
