import { Injectable } from '@angular/core';
// RxJs
import { tap, filter, first } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'store/productos';

@Injectable()
export class ProductosDataManagerService {
    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    //#region Load By ID
    loadProductoByID(ID: number) {
        return this.store.select(fromStore.getSelectedProducto).pipe(
            filter(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadProductoByID(ID)); }
                return !!data;
            }),
            first()
        );
    }

    loadMarcaByID(ID: number) {
        return this.store.select(fromStore.getSelectedMarca).pipe(
            filter(data => {
                if (!data) {
                    this.store.dispatch(new fromStore.LoadMarcaByID(ID));
                } else if (!data.categoriasLoaded) {
                    this.store.dispatch(new fromStore.LoadCategoriasByMarcaID(ID));
                }
                return !!data;
            }),
            first()
        );
    }

    loadCategoriaByID(ID: number) {
        return this.store.select(fromStore.getSelectedCategoria).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID, ''));
            }})
        );
     }
    //#endregion

    loadCategorias() {
        return this.store.select(fromStore.getCategoriasLoaded).pipe(
            filter(loaded => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadAllCategorias()); }
                return loaded;
            }),
            first()
        );
    }

    loadMarcas() {
        return this.store.select(fromStore.getMarcasLoaded).pipe(
            filter(loaded => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadMarcas()); }
                return loaded;
            }),
            first()
        );
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
