import { Injectable } from '@angular/core';
// RxJs
import { tap, take, filter, map } from 'rxjs/operators';
// Stores
import { Store, createSelector, Selector } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
import { Observable, forkJoin, pipe, combineLatest } from 'rxjs';

@Injectable()
export class ProductosDataManagerService {
    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    //#region Load By ID
    loadProductoByID(ID: number) {
        return this.store.select(fromStore.getSelectedProducto).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadProductoByID(ID)); }
            })
        );
    }

    loadMarcaByID(ID: number) {
        return this.store.select(fromStore.getSelectedMarca).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadMarcaByID(ID)); }
            })
        );
    }

    loadCategoriaByID(ID: number) {
        return this.store.select(fromStore.getSelectedCategoria).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID));
            }})
        );
     }
    //#endregion

    loadCategorias() {
        return this.store.select(fromStore.getCategoriasLoaded).pipe(
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadAllCategorias()); }
            }));
    }

    loadMarcas() {
        return this.store.select(fromStore.getMarcasLoaded).pipe(
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadMarcas()); }
            }));
    }

    loadProductosByCategoriaID(ID: number) {
        return combineLatest(
            this.loadCategoriaByID(ID),
            this.store.select(fromStore.getProductosBySelectedCategory)
        ).pipe(
            map(data => ({ categoria: data[0], productos: data[1] })),
            tap(data => {
                if (data.categoria && !data.productos.length) {
                    this.store.dispatch(new fromStore.LoadProductosByCategoryID(ID));
                }
            })
        );
    }
}
