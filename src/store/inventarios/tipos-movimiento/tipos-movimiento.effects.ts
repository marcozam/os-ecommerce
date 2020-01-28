import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
// Actions
import * as loadingActions from '../../loading-store/actions';
import * as tiposMovimientoActions from './tipos-movimiento.action';
// Services
import { MovimientosInventarioService } from 'services/http/inventarios';

@Injectable()
export class TiposMovimientoInventarioEffects {
  constructor(
    private actions$: Actions,
    private service: MovimientosInventarioService) { }

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        tiposMovimientoActions.GetTiposMovimientoInventario,
        tiposMovimientoActions.GetTiposMovimientoInventarioByID,
        tiposMovimientoActions.SaveTiposMovimientoInventario,
      ),
      map(() => new loadingActions.StartRequest()),
    ));

  endRequest$ = createEffect(() => this.actions$.pipe(
      ofType(
        tiposMovimientoActions.GetTiposMovimientoInventarioFail,
        tiposMovimientoActions.GetTiposMovimientoInventarioSuccess,
        tiposMovimientoActions.GetTiposMovimientoInventarioByIDFail,
        tiposMovimientoActions.GetTiposMovimientoInventarioByIDSuccess,
        tiposMovimientoActions.SaveTiposMovimientoInventarioFail,
        tiposMovimientoActions.SaveTiposMovimientoInventarioSuccess,
      ),
      map(() => new loadingActions.EndRequest()),
    ));

  loadTiposMovimientos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tiposMovimientoActions.GetTiposMovimientoInventario),
      concatMap(() => this.service.getTipoMovimientos().pipe(
        map(payload => tiposMovimientoActions.GetTiposMovimientoInventarioSuccess({ payload })),
        catchError(error => of(tiposMovimientoActions.GetTiposMovimientoInventarioFail({ payload: error })))
      ))));

}
