import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// RxJS
import { of, concat } from 'rxjs';
import { map, catchError, switchMap, tap, filter } from 'rxjs/operators';
// Notifications
import { NOTIFICATION_CODE } from 'app/notifications';
// Actions
import * as marcasActions from '../actions/marcas.action';
// Services
import {
    MarcaProductoService,
    CategoriaProductoService
} from 'app/services/productos';
// Models
import { MarcaProducto, CategoriaProducto } from 'app/models/productos';

@Injectable()
export class MarcasEffects {
    constructor(
        private actions$: Actions,
        private service: MarcaProductoService,
        private categoriaService: CategoriaProductoService
    ) { }

    @Effect()
    loadMarcas$ = this.actions$.ofType(marcasActions.MarcasActionTypes.LOAD_MARCAS).pipe(
        switchMap(() => {
            return this.service.getList().pipe(
                map(list => new marcasActions.LoadMarcasSuccess(list)),
                catchError(error => of(new marcasActions.LoadMarcasFail(error)))
            );
        })
    );

    @Effect()
    loadMarcasByID$ = this.actions$.ofType(marcasActions.MarcasActionTypes.LOAD_MARCA_BY_ID).pipe(
        switchMap((action: marcasActions.LoadMarcaByID) => {
            let _categorias: CategoriaProducto[];
            const get$ = this.service.getByID(action.payload);
            const getCategorias$ = this.categoriaService.getByMarca(action.payload).pipe(
                tap(items => _categorias = items)
            );
            const result$ = concat(getCategorias$, get$);
            return result$.pipe(
                filter(data => !Array.isArray(data)),
                map((item: MarcaProducto) => {
                    if (item) {
                        item.categoriasLoaded = true;
                        item.categorias = _categorias;
                        return new marcasActions.LoadMarcaByIDSuccess(item);
                    } else {
                        return new marcasActions.LoadMarcaByIDFail(NOTIFICATION_CODE.ITEM_NOT_FOUND);
                    }
                }),
                catchError(() => of(new marcasActions.LoadMarcaByIDFail(NOTIFICATION_CODE.GENERAL_ERROR)))
            );
        })
    );

    @Effect()
    loadCategoriaByMarcaID$ = this.actions$.ofType(marcasActions.MarcasActionTypes.LOAD_CATEGORIAS_BY_MARCA)
        .pipe(
            switchMap((action: marcasActions.LoadCategoriasByMarcaID) => {
                return this.categoriaService.getByMarca(action.payload).pipe(
                    map(items => {
                        return items ?
                        new marcasActions.LoadCategoriasByMarcaIDSuccess(items, action.payload) :
                        new marcasActions.LoadCategoriasByMarcaIDFail(NOTIFICATION_CODE.NO_DATA);
                    }),
                    catchError(() => of(new marcasActions.LoadCategoriasByMarcaIDFail(NOTIFICATION_CODE.GENERAL_ERROR)))
                );
            })
        );

    @Effect()
    saveMarca$ = this.actions$.ofType( marcasActions.MarcasActionTypes.SAVE_MARCA)
        .pipe(
            switchMap((action: marcasActions.SaveMarca) => {
                return this.service.save(action.newItem, action.oldItem).pipe(
                    map(item => new marcasActions.SaveMarcaSuccess(item, NOTIFICATION_CODE.ITEM_SAVED)),
                    catchError(() => of(new marcasActions.SaveMarcaFail(NOTIFICATION_CODE.GENERAL_ERROR)))
                );
            })
        );
}
