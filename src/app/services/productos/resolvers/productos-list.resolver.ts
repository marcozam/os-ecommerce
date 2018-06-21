import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// RxJs
import { tap, take } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

@Injectable()
export class ProductosListResolver implements Resolve<void> {
    constructor(private store: Store<fromStore.ProductsModuleState>) { }
    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params.categoryId;
        if (!isNaN(ID)) { this.loadProductosByCategoriaID(ID); }
    }

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
