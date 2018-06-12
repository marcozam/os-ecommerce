import { Injectable } from '@angular/core';
import { tap, take, filter} from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
// import * as fromRoot from 'app/state-router';
import * as fromStore from 'app/root-store/productos-store';

@Injectable()
export class ProductosDataManagerService {

    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    // Load All
    loadCategorias() {
        return this.store.select(fromStore.getCategoriasLoaded).pipe(
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadAllCategorias()); }
            }), take(1));
    }

    loadMarcas() {
        return this.store.select(fromStore.getMarcasLoaded).pipe(
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadMarcas()); }
            }), take(1));
    }

    // By ID
    loadProductoByID(ID: number) {
        return this.store.select(fromStore.getSelectedProducto).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID)); }
            }),
            filter((data) => data !== undefined), take(1));
    }

    loadCategoriaByID(ID: number) {
        return this.store.select(fromStore.getSelectedCategoria).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID)); }
            }),
            filter((data) => data !== undefined), take(1));
    }

    loadMarcaByID(ID: number) {
        return this.store.select(fromStore.getSelectedMarca).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID)); }
            }),
            filter((data) => data !== undefined), take(1));
    }

    // Other
    loadProductosByCategoriaID(ID: number) {
        return this.store.select(fromStore.getProductosBySelectedCategory).pipe(
            tap(data => {
                if (!data.length) {
                    this.store.dispatch(new fromStore.LoadProductosByCategoryID(ID));
                }
            }),
            // filter((data) => data.length)
            take(1)
        );
    }
}
