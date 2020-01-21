import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
// Notifications
import { NOTIFICATION_CODE } from 'app/notifications';
// Actions
import * as productosActions from './productos.action';
import * as loadingActions from '../../loading-store/actions';
// Services
import { ProductosService } from 'services/http/productos';

@Injectable()
export class ProductosEffects {
  constructor(private actions$: Actions, private service: ProductosService) { }

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        productosActions.LoadProductos,
        productosActions.LoadProductoByID,
        productosActions.SaveProducto,
        productosActions.LoadProductosByCategoryID,
      ),
      map(() => new loadingActions.StartRequest())
    ));

  endRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        productosActions.LoadProductosSuccess,
        productosActions.LoadProductosFail,
        productosActions.LoadProductoByIDSuccess,
        productosActions.LoadProductoByIDFail,
        productosActions.SaveProductoSuccess,
        productosActions.SaveProductoFail,
        productosActions.LoadProductosByCategoryIDSuccess,
        productosActions.LoadProductosByCategoryIDFail,
      ),
      map(() => new loadingActions.EndRequest())
  ));

  loadProductos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productosActions.LoadProductos),
      concatMap(() => this.service.getList().pipe(
        map(payload => productosActions.LoadProductosSuccess({ payload })),
        catchError(error => of(productosActions.LoadProductosFail( { payload: error })))
      ))));

  loadProductoByID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productosActions.LoadProductoByID),
      concatMap(({ payload }) => this.service.getByID(payload).pipe(
        map(payload => payload ?
          productosActions.LoadProductoByIDSuccess({ payload }) :
          productosActions.LoadProductoByIDFail({ payload: NOTIFICATION_CODE.ITEM_NOT_FOUND })
        ),
        catchError(() => of(productosActions.LoadProductoByIDFail({ payload: NOTIFICATION_CODE.GENERAL_ERROR })))
      ))));

  loadProductosByCategoria$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productosActions.LoadProductosByCategoryID),
      mergeMap(({ payload }) => this.service.getProductsByCategory(payload).pipe(
        map(list => productosActions.LoadProductosByCategoryIDSuccess({ payload: { id: payload, list }})),
        catchError(error => of(productosActions.LoadProductosByCategoryIDFail(error)))
      ))));

  saveProducto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productosActions.SaveProducto),
      concatMap(({ payload }) => this.service.save(payload.value).pipe(
        map(payload => productosActions.SaveProductoSuccess({ payload })),
        catchError(error => of(productosActions.SaveProductoFail({ payload: NOTIFICATION_CODE.ITEM_NOT_SAVED })))
      ))));
}
