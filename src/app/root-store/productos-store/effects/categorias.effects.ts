import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import { StandAloneRootState } from 'app/root-store';
// RxJS
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
// Constants
import {
    ITEM_NOT_EXIST_ERROR_MESSAGE,
    WARNING_TITLE,
    DialogTypes
} from 'app/constants';
// Actions
import * as categoriasActions from '../actions/categorias.action';
import * as productosActions from '../actions/productos.action';
// Services
import { CategoriaProductoService } from 'app/services/productos/categoria-producto.service';

@Injectable()
export class CategoriasEffects {
    constructor(
        private actions$: Actions,
        private store: Store<StandAloneRootState>,
        private service: CategoriaProductoService
    ) { }

    @Effect()
    LoadProductosByCategorySuccess$ = this.actions$.ofType(productosActions.LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS)
        .pipe(
            map((action: productosActions.LoadProductosByCategoryIDSuccess) => {
                return new categoriasActions.SetCategoriaLoadedState(action.payload.id);
            })
        );

    @Effect()
    loadCategorias$ = this.actions$.ofType(categoriasActions.CategoriasActionTypes.LOAD_CATEGORIAS)
        .pipe(
            switchMap(() => {
                return this.service.getList().pipe(
                    map(list => new categoriasActions.LoadCategoriasSuccess(list)),
                    catchError(error => of(new categoriasActions.LoadCategoriasFail(error)))
                );
            })
        );

    @Effect()
    loadCategoriaByID$ = this.actions$.ofType(categoriasActions.CategoriasActionTypes.LOAD_CATEGORIA_BY_ID)
        .pipe(
            switchMap((action: categoriasActions.LoadCategoriaByID) => {
                return this.service.getByID(action.payload).pipe(
                    map(item => {
                        return item ?
                        new categoriasActions.LoadCategoriaByIDSuccess(item) :
                        new categoriasActions.LoadCategoriaByIDFail({
                            title: WARNING_TITLE,
                            message: ITEM_NOT_EXIST_ERROR_MESSAGE,
                            isHandled: true,
                            type: DialogTypes.WARNING,
                        });
                    }),
                    catchError(error => of(new categoriasActions.LoadCategoriaByIDFail(error)))
                );
            })
        );
}
