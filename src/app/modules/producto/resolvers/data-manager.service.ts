import { Injectable } from '@angular/core';
// RxJs
import { tap } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

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
                if (!data) {
                    this.store.dispatch(new fromStore.LoadMarcaByID(ID));
                } else if (!data.categoriasLoaded) {
                    this.store.dispatch(new fromStore.LoadCategoriasByMarcaID(ID));
                }
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
        return this.loadCategoriaByID(ID).pipe(
            tap(categoria => {
                if (categoria && !categoria.productosLoaded) {
                    this.store.dispatch(new fromStore.LoadProductosByCategoryID(ID));
                }
            })
        );
    }
}
