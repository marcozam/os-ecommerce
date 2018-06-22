import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// RxJs
import { Observable, of } from 'rxjs';
import { tap, take, filter, switchMap, mergeMap, catchError, debounceTime, timeout } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Modals
import { CategoriaProducto } from 'app/models/productos';

@Injectable()
export class CategoriaDetailResolver implements Resolve<Observable<CategoriaProducto>> {

    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    resolve(route: ActivatedRouteSnapshot): Observable<CategoriaProducto> {
        const ID = route.params.categoryId;
        if (!isNaN(ID)) { return this.loadCategoriaByID(ID); }
    }

    loadCategoriaByID(ID: number): Observable<CategoriaProducto> {
        return this.store.select<CategoriaProducto>(fromStore.getSelectedCategoria).pipe(
            take(1),
            tap((data: CategoriaProducto) => {
                if (!data) { this.store.dispatch(new fromStore.LoadCategoriaByID(ID)); }
            })
        );
    }
}
