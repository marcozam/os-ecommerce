import { Injectable } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
import { tap, take, filter} from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { MarcaProducto } from 'app/models/productos';

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
                if (!data) { this.store.dispatch(new fromStore.LoadProductoByID(ID)); }
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

    loadMarcaByID(ID: number): Observable<MarcaProducto> {
        return this.store.select(fromStore.getSelectedMarca).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadMarcaByID(ID)); }
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
