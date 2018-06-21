import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
import { tap, take, filter} from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { MarcaProducto } from 'app/models/productos';

@Injectable()
export class MarcaDetailResolver implements Resolve<Observable<MarcaProducto>> {

    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params.marcaId;
        if (!isNaN(ID)) { return this.loadMarcaByID(ID); }
    }

    loadMarcaByID(ID: number): Observable<MarcaProducto> {
        return this.store.select(fromStore.getSelectedMarca).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadMarcaByID(ID)); }
            }),
            filter((data) => data !== undefined), take(1));
    }
}
