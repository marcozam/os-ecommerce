import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
// Actions
import * as productosActions from '../actions/productos.action';
// Services
import { ProductosService } from 'app/services/productos';

@Injectable()
export class ProductosEffects {
    constructor(
        private actions$: Actions,
        private service: ProductosService
    ) { }

    @Effect()
    loadProductosByCategoria$ = this.actions$.ofType(productosActions.LOAD_PRODUCTOS_BY_CATEGORY_ID)
        .pipe(
            mergeMap((action: productosActions.LoadProductosByCategoryID) => {
                return this.service.getProductsByCategory(action.payload).pipe(
                    map(list => new productosActions.LoadProductosByCategoryIDSuccess({
                        id: action.payload, list
                    })),
                    catchError(error => of(new productosActions.LoadProductosByCategoryIDFail(error)))
                );
            })
        );
}
