import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { of, concat } from 'rxjs';
import { switchMap, map, catchError, tap, filter } from 'rxjs/operators';
// Notifications
import { NOTIFICATION_CODE } from 'app/notifications';
// Actions
import * as categoriasActions from '../actions/categorias.action';
import * as productosActions from '../actions/productos.action';
// Services
import { CategoriaProductoService, MarcaProductoService } from 'services/productos';
// Models
import { MarcaProducto, CategoriaProducto } from 'app/models';

@Injectable()
export class CategoriasEffects {
    constructor(
        private actions$: Actions,
        private service: CategoriaProductoService,
        private marcaService: MarcaProductoService
    ) { }

    @Effect()
    loadProductosByCategorySuccess$ = this.actions$.ofType(productosActions.PRODUCTOS_ACTION_TYPES.LOAD_PRODUCTOS_BY_CATEGORY_ID_SUCCESS)
        .pipe(
            map((action: productosActions.LoadProductosByCategoryIDSuccess) => {
                return new categoriasActions.SetCategoriaLoadedState(action.payload.id);
            })
        );

    @Effect()
    loadCategorias$ = this.actions$.ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS)
        .pipe(
            switchMap(() => {
                return this.service.getList().pipe(
                    map(list => new categoriasActions.LoadCategoriasSuccess(list)),
                    catchError(error => of(new categoriasActions.LoadCategoriasFail(error)))
                );
            })
        );

    @Effect()
    loadCategoriaByID$ = this.actions$.ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID)
        .pipe(
            switchMap((action: categoriasActions.LoadCategoriaByID) => {
                let _marcas: MarcaProducto[];
                const get$ = this.service.getByID(action.payload);
                const getMarcas$ = this.marcaService.getByCategoria(action.payload).pipe(
                    tap(items => _marcas = items)
                );
                const result$ = concat(getMarcas$, get$);
                return result$.pipe(
                    filter(data => !Array.isArray(data)),
                    map((item: CategoriaProducto) => {
                        if (item) {
                            item.marcasLoaded = true;
                            item.marcas = _marcas;
                            return new categoriasActions.LoadCategoriaByIDSuccess(item);
                        } else {
                            return new categoriasActions.LoadCategoriaByIDFail(NOTIFICATION_CODE.ITEM_NOT_FOUND);
                        }
                    }),
                    catchError(() => of(new categoriasActions.LoadCategoriaByIDFail(NOTIFICATION_CODE.GENERAL_ERROR)))
                );
            })
        );

    @Effect()
    saveCategoria$ = this.actions$.ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA)
        .pipe(
            switchMap((action: categoriasActions.SaveCategoria) => {
                return this.service.save(action.newItem, action.oldItem).pipe(
                    map(item => new categoriasActions.SaveCategoriaSuccess(item, NOTIFICATION_CODE.ITEM_SAVED)),
                    catchError(() => of(new categoriasActions.SaveCategoriaFail(NOTIFICATION_CODE.GENERAL_ERROR)))
                );
            })
        );

    @Effect()
    loadMarcasByCategoriaID$ = this.actions$.ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA)
        .pipe(
            switchMap((action: categoriasActions.LoadMarcasByCategoriaID) => {
                return this.marcaService.getByCategoria(action.payload).pipe(
                    map(items => {
                        return items ?
                        new categoriasActions.LoadMarcasByCategoriaIDSuccess(items, action.payload) :
                        new categoriasActions.LoadMarcasByCategoriaIDFail(NOTIFICATION_CODE.NO_DATA);
                    }),
                    catchError(() => of(new categoriasActions.LoadMarcasByCategoriaIDFail(NOTIFICATION_CODE.GENERAL_ERROR)))
                );
            })
        );
}
