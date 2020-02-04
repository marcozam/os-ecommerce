import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from '../../base-catalogs';
// RxJS
import { of } from 'rxjs';
import { map, catchError, concatMap, withLatestFrom } from 'rxjs/operators';
// Actions
import * as loadingActions from '../../loading-store/actions';
import * as inventarioActions from './movimientos.action';
// Services
import {
  InventarioService,
  MovimientosInventarioService,
} from 'services/http/inventarios';

@Injectable()
export class MovimientosInventarioEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<fromStore.BaseCatalogsModuleState>,
    private inventarioService: InventarioService,
    private movimientosService: MovimientosInventarioService) { }

  sucursalId$ = this.store$.select(fromStore.selectSelectedSucursalId);

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        inventarioActions.GetMovimientosInventario,
      ),
      map(() => new loadingActions.StartRequest()),
    ));

  endRequest$ = createEffect(() => this.actions$.pipe(
      ofType(
        inventarioActions.GetMovimientosInventarioSuccess,
        inventarioActions.GetMovimientosInventarioFail,
      ),
      map(() => new loadingActions.EndRequest()),
    ));

  loadMovimientos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(inventarioActions.GetMovimientosInventario),
      withLatestFrom(this.sucursalId$),
      concatMap(([action, sucursalId]) => {
        const { payload } = action;
        const { start, end } = payload.getTimeFrame();
        return this.movimientosService.getMovimientos(sucursalId, start, end).pipe(
          map(payload => inventarioActions.GetMovimientosInventarioSuccess({ payload })),
          catchError(payload => of(inventarioActions.GetMovimientosInventarioFail({ payload }))));
        })));

  loadInventario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(inventarioActions.GetInventario),
      withLatestFrom(this.sucursalId$),
      concatMap(([action, sucursalId]) => {
        return this.inventarioService.getInventarioActual(sucursalId).pipe(
          map(payload => inventarioActions.GetInventarioSuccess({ payload })),
          catchError(payload => of(inventarioActions.GetInventarioFail({ payload }))));
        })));
}
