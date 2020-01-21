import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
// RxJS
import { of, forkJoin } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
// Actions
import * as marcasActions from './marcas.action';
import * as loadingActions from '../../loading-store/actions';
// Services
import {
  MarcaProductoService,
  CategoriaProductoService
} from 'services/http/productos';

@Injectable()
export class MarcasEffects {
  constructor(
    private actions$: Actions,
    private service: MarcaProductoService,
    private categoriaService: CategoriaProductoService
  ) { }

  startRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        marcasActions.LoadMarcas,
        marcasActions.LoadMarcaByID,
        marcasActions.SaveMarca,
        marcasActions.LoadMarcasByCategoriaID,
      ),
      map(() => new loadingActions.StartRequest()),
    ));

  endRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        marcasActions.LoadMarcasSuccess,
        marcasActions.LoadMarcasFail,
        marcasActions.LoadMarcaByIDSuccess,
        marcasActions.LoadMarcaByIDFail,
        marcasActions.SaveMarcaSuccess,
        marcasActions.SaveMarcaFail,
        marcasActions.LoadMarcasByCategoriaIDSuccess,
        marcasActions.LoadMarcasByCategoriaIDFail,
      ),
      map(() => new loadingActions.EndRequest()),
  ));

  loadMarcas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(marcasActions.LoadMarcas),
      concatMap(() => this.service.getList().pipe(
        map(payload => marcasActions.LoadMarcasSuccess({ payload })),
        catchError(error => of(marcasActions.LoadMarcasFail({ payload: error }))),
      ))));

  loadMarcasByID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(marcasActions.LoadMarcaByID),
      concatMap(({ payload: id }) => forkJoin([
        this.service.getByID(id),
        this.categoriaService.getByMarca(id),
      ]).pipe(
        map(([ marca, categorias ]) => {
          if (marca) {
            marca.categoriasLoaded = true;
            marca.categorias = categorias;
            return marcasActions.LoadMarcaByIDSuccess({ payload: marca });
          }
          return marcasActions.LoadMarcaByIDFail({}); // NOTIFICATION_CODE.ITEM_NOT_FOUND
        }),
        catchError(() => of(marcasActions.LoadMarcaByIDFail({}))), // NOTIFICATION_CODE.GENERAL_ERROR
      ))));

  saveMarca$ = createEffect(() =>
    this.actions$.pipe(
      ofType(marcasActions.SaveMarca),
      concatMap(({ payload }) => this.service.save(payload.value, payload.oldValue).pipe(
        map(payload => marcasActions.SaveMarcaSuccess({ payload })),
        catchError(() => of(marcasActions.SaveMarcaFail({}))),
      ))));

  loadMarcasByCategoriaID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(marcasActions.LoadMarcasByCategoriaID),
      concatMap(({ payload: id }) => this.service.getByCategoria(id).pipe(
        map(list => list ?
          marcasActions.LoadMarcasByCategoriaIDSuccess({ payload: { id, list }}) :
          marcasActions.LoadMarcasByCategoriaIDFail({}) // NOTIFICATION_CODE.NO_DATA
        ),
        catchError(() => of(marcasActions.LoadMarcasByCategoriaIDFail({})))
      ))));
}
