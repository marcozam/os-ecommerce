import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// RxJs
import { tap, take, filter} from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

@Injectable()
export class CategoriasListResolver implements Resolve<void> {

    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    resolve() { this.loadCategorias(); }

    loadCategorias() {
        return this.store.select(fromStore.getCategoriasLoaded).pipe(
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadAllCategorias()); }
            }), take(1));
    }
}
