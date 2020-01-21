import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of, forkJoin } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
// Notifications
// import { NOTIFICATION_CODE } from 'app/notifications';
// Actions
import * as loadingActions from '../../loading-store/actions';
import * as categoriasActions from './categorias.action';
import * as productosActions from '../productos/productos.action';
// Services
import { CategoriaProductoService, MarcaProductoService } from 'services/http/productos';

@Injectable()
export class CategoriasEffects {
  constructor(
    private actions$: Actions,
    private service: CategoriaProductoService,
    private marcaService: MarcaProductoService) { }

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        categoriasActions.LoadAllCategorias,
        categoriasActions.LoadCategoriaByID,
        categoriasActions.LoadCategoriasByMarcaID,
        categoriasActions.SaveCategoria,
      ),
      map(() => new loadingActions.StartRequest()),
    ));

  endRequest$ = createEffect(() => this.actions$.pipe(
      ofType(
        categoriasActions.LoadAllCategoriasFail,
        categoriasActions.LoadAllCategoriasSuccess,
        categoriasActions.LoadCategoriaByIDFail,
        categoriasActions.LoadCategoriaByIDSuccess,
        categoriasActions.LoadCategoriasByMarcaIDFail,
        categoriasActions.LoadCategoriasByMarcaIDSuccess,
        categoriasActions.SaveCategoriaFail,
        categoriasActions.SaveCategoriaSuccess,
      ),
      map(() => new loadingActions.EndRequest()),
    ));

  /*
  @Effect()
  loadProductosByCategorySuccess$ = this.actions$.pipe(
      ofType(productosActions.LoadProductosByCategoryIDSuccess),
      map(({ payload }) => new categoriasActions.SetCategoriaLoadedState(payload.id))
  );
  */

  loadCategorias$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriasActions.LoadAllCategorias),
      concatMap(() => this.service.getList().pipe(
        map(payload => categoriasActions.LoadAllCategoriasSuccess({ payload })),
        catchError(error => of(categoriasActions.LoadAllCategoriasFail({})))
      ))));

  loadCategoriaByID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriasActions.LoadCategoriaByID),
      concatMap(({ payload: id }) => forkJoin([
        this.service.getByID(id),
        this.marcaService.getByCategoria(id),
      ]).pipe(
        map(([payload, marcas]) => {
          if (payload) {
            payload.marcasLoaded = true;
            payload.marcas = marcas;
            return categoriasActions.LoadCategoriaByIDSuccess({ payload });
          }
          return categoriasActions.LoadCategoriaByIDFail({}); // NOTIFICATION_CODE.ITEM_NOT_FOUND
        }),
        catchError(() => of(categoriasActions.LoadCategoriaByIDFail({}))) // NOTIFICATION_CODE.GENERAL_ERROR
      ))));

  saveCategoria$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoriasActions.SaveCategoria),
      concatMap(({ payload }) => this.service.save(payload.value, payload.oldValue).pipe(
        map(payload => categoriasActions.SaveCategoriaSuccess({ payload })),
        catchError(() => of(categoriasActions.SaveCategoriaFail({}))),
      ))));

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
