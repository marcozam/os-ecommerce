import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
// Notifications
import { NOTIFICATION_CODE } from 'app/notifications';
// Actions
import * as productosActions from '../actions/productos.action';
import * as loadingActions from '../../loading-store/actions';
// Services
import { ProductosService } from 'services/http/productos';

const startRequestActions = [
    productosActions.PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID,
    productosActions.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO
];

const endRequestActions = [
    productosActions.PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO_FAIL,
    productosActions.PRODUCTOS_ACTION_TYPES.DELETE_PRODUCTO_SUCCESS,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_FAIL,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_SUCCESS,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_FAIL,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_FAIL,
    productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID_SUCCESS,
    productosActions.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL,
    productosActions.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS
];

@Injectable()
export class ProductosEffects {
    constructor(private actions$: Actions, private service: ProductosService) { }

    @Effect()
    startRequest$ = this.actions$.pipe(
        ofType(...startRequestActions),
        map(() => new loadingActions.StartRequest())
    );

    @Effect()
    endRequest$ = this.actions$.pipe(
        ofType(...startRequestActions),
        map(() => new loadingActions.EndRequest())
    );

    @Effect()
    loadProductos$ = this.actions$.pipe(
        ofType(productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS),
        mergeMap(() => {
            return this.service.getList().pipe(
                map(list => new productosActions.LoadProductosSuccess(list)),
                catchError(error => of(new productosActions.LoadProductosFail(error)))
            );
        })
    );

    @Effect()
    loadProductoByID$ = this.actions$.pipe(
        ofType(productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTO_BY_ID),
        switchMap((action: productosActions.LoadProductoByID) => {
            return this.service.getByID(action.payload).pipe(
                map(data => {
                    if (data) {
                        return new productosActions.LoadProductoByIDSuccess(data);
                    } else {
                        return new productosActions.LoadProductoByIDFail(NOTIFICATION_CODE.ITEM_NOT_FOUND);
                    }
                }),
                catchError(() => of(new productosActions.LoadProductoByIDFail(NOTIFICATION_CODE.GENERAL_ERROR)))
            );
        })
    );

    @Effect()
    loadProductosByCategoria$ = this.actions$.pipe(
        ofType(productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID),
        mergeMap((action: productosActions.LoadProductosByCategoryID) => {
            return this.service.getProductsByCategory(action.payload).pipe(
                map(list => new productosActions.LoadProductosByCategoryIDSuccess({
                    id: action.payload, list
                })),
                catchError(error => of(new productosActions.LoadProductosByCategoryIDFail(error)))
            );
        })
    );

    @Effect()
    saveProducto$ = this.actions$.pipe(
        ofType(productosActions.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO),
        mergeMap((action: productosActions.SaveProducto) => {
            return this.service.save(action.payload).pipe(
                map(item => new productosActions.SaveProductoSuccess(item, NOTIFICATION_CODE.ITEM_SAVED)),
                catchError(error => of(new productosActions.SaveProductoFail(NOTIFICATION_CODE.ITEM_NOT_SAVED)))
            );
        })
    );
}
