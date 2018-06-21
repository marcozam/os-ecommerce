import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
import { tap, take, filter } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Modals
import { CategoriaProducto } from 'app/models/productos';

@Injectable()
export class CategoriaDetailResolver implements Resolve<Observable<CategoriaProducto>> {

    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    resolve(route: ActivatedRouteSnapshot): Observable<CategoriaProducto> {
        const ID = route.params.categoriaId;
        if (!isNaN(ID)) { return this.loadCategoriaByID(ID); }
    }

    loadCategoriaByID(ID: number) {
        return this.store.select(fromStore.getSelectedCategoria).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID)); }
            }),
            filter((data) => data !== undefined), take(1));
    }
}
