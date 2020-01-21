import { Injectable } from '@angular/core';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of, concat } from 'rxjs';
import { switchMap, map, catchError, tap, filter, concatMap } from 'rxjs/operators';
// Notifications
import { NOTIFICATION_CODE } from 'app/notifications';
// Actions
import * as loadingActions from '../../loading-store/actions';
import * as categoriasActions from './categorias.action';
import * as productosActions from '../productos/productos.action';
// Services
import { CategoriaProductoService, MarcaProductoService } from 'services/http/productos';
// Models
import { MarcaProducto, CategoriaProducto } from 'models/productos';

const startRequestActions = [
    categoriasActions.CATEGORIAS_ACTION_TYPES.DELETE_CATEGORIA,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA,
    categoriasActions.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA
];

const endRequestActions = [
    categoriasActions.CATEGORIAS_ACTION_TYPES.DELETE_CATEGORIA_FAIL,
    categoriasActions.CATEGORIAS_ACTION_TYPES.DELETE_CATEGORIA_SUCCESS,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS_FAIL,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS_SUCCESS,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID_FAIL,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID_SUCCESS,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA_FAIL,
    categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA_SUCCESS,
    categoriasActions.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_FAIL,
    categoriasActions.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_SUCCESS
];

@Injectable()
export class CategoriasEffects {
    constructor(
        private actions$: Actions,
        private service: CategoriaProductoService,
        private marcaService: MarcaProductoService
    ) { }

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

    /*
    @Effect()
    loadProductosByCategorySuccess$ = this.actions$.pipe(
        ofType(productosActions.LoadProductosByCategoryIDSuccess),
        map(({ payload }) => new categoriasActions.SetCategoriaLoadedState(payload.id))
    );

    @Effect()
    loadCategorias$ = this.actions$.pipe(
        ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIAS),
        switchMap(() => {
            return this.service.getList().pipe(
                map(list => new categoriasActions.LoadCategoriasSuccess(list)),
                catchError(error => of(new categoriasActions.LoadCategoriasFail(error)))
            );
        })
    );
    */

    @Effect()
    loadCategoriaByID$ = this.actions$.pipe(
        ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_CATEGORIA_BY_ID),
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
    saveCategoria$ = this.actions$.pipe(
        ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA),
        switchMap((action: categoriasActions.SaveCategoria) => {
            return this.service.save(action.newItem, action.oldItem).pipe(
                map(item => new categoriasActions.SaveCategoriaSuccess(item, NOTIFICATION_CODE.ITEM_SAVED)),
                catchError(() => of(new categoriasActions.SaveCategoriaFail(NOTIFICATION_CODE.GENERAL_ERROR)))
            );
        })
    );

    @Effect()
    loadMarcasByCategoriaID$ = this.actions$.pipe(
        ofType(categoriasActions.CATEGORIAS_ACTION_TYPES.LOAD_MARCAS_BY_CATEGORIA),
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

    loadCategoriaByMarcaID$ = createEffect(() =>
      this.actions$.pipe(
        ofType(categoriasActions.LoadCategoriasByMarcaID),
        concatMap(({ payload: id }) => this.service.getByMarca(id).pipe(
          map(list => list ?
            categoriasActions.LoadCategoriasByMarcaIDSuccess({ payload: { list, id }}) :
            categoriasActions.LoadCategoriasByMarcaIDFail({}) // NOTIFICATION_CODE.NO_DATA
          ),
          catchError(() => of(categoriasActions.LoadCategoriasByMarcaIDFail({})))
        ))));
}
