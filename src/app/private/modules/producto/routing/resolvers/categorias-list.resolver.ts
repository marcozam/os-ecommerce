import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// RxJs
import { filter, first } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'store/productos';

@Injectable()
export class CategoriasListResolver implements Resolve<boolean> {

  constructor(private store$: Store<fromStore.ProductsModuleState>) { }

  resolve() {
    return this.store$.select(fromStore.getCategoriasLoaded).pipe(
      filter(loaded => {
        if (!loaded) {
          this.store$.dispatch(fromStore.LoadAllCategorias());
        }
        return loaded;
      }),
      first()
    );
  }
}
