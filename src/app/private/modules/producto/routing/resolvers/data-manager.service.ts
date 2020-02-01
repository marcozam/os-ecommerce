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
  loadProductoByID(payload: number) {
    return this.store.select(fromStore.selectSelectedProducto).pipe(
      filter(data => {
        if (!data) {
          this.store.dispatch(fromStore.LoadProductoByID({ payload }));
        }
        return !!data;
      }),
      first()
    );
  }

  loadMarcaByID(payload: number) {
    return this.store.select(fromStore.getSelectedMarca).pipe(
      filter(data => {
        if (!data) {
          this.store.dispatch(fromStore.LoadMarcaByID({ payload }));
        } else if (!data.categoriasLoaded) {
          this.store.dispatch(fromStore.LoadCategoriasByMarcaID({ payload }));
        }
        return !!data;
      }),
      first()
    );
  }

  loadCategoriaByID(payload: number) {
    return this.store.select(fromStore.getSelectedCategoria).pipe(
      filter(data => {
        if (!data) {
          this.store.dispatch(fromStore.LoadCategoriaByID({ payload }));
        }
        return !!data;
      })
    );
  }
  //#endregion

  loadMarcas() {
    return this.store.select(fromStore.getMarcasLoaded).pipe(
      filter(loaded => {
        if (!loaded) {
          this.store.dispatch(fromStore.LoadMarcas());
        }
        return loaded;
      }),
      first()
    );
  }

  loadProductosByCategoriaID(payload: number) {
    return this.loadCategoriaByID(payload).pipe(
      tap(categoria => {
        if (categoria && !categoria.productosLoaded) {
          this.store.dispatch(fromStore.LoadProductosByCategoryID({ payload }));
        }
      })
    );
  }
}
