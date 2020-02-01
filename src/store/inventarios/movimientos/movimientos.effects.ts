import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
// Actions
import * as loadingActions from '../../loading-store/actions';
import * as movimientosActions from './movimientos.action';
// Services
import { MovimientosInventarioService } from 'services/http/inventarios';

@Injectable()
export class MovimientosInventarioEffects {
  constructor(
    private actions$: Actions,
    private service: MovimientosInventarioService) { }

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        movimientosActions.GetMovimientosInventario
      ),
      map(() => new loadingActions.StartRequest()),
    ));

  endRequest$ = createEffect(() => this.actions$.pipe(
      ofType(
        movimientosActions.GetMovimientosInventarioSuccess,
        movimientosActions.GetMovimientosInventarioFail,
      ),
      map(() => new loadingActions.EndRequest()),
    ));

  loadMovimientos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(movimientosActions.GetMovimientosInventario),
      concatMap(({ payload }) => {
        const { start, end } = payload.getTimeFrame();
        return this.service.getMovimientos(1, start, end).pipe(
          map(payload => movimientosActions.GetMovimientosInventarioSuccess({ payload })),
          catchError(error => of(movimientosActions.GetMovimientosInventarioFail({ payload: error }))));
        })));
}
