import { Injectable } from '@angular/core';
// RxJs
import { tap, take, filter} from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

@Injectable()
export class ProductosDataManagerService {

    constructor(private store: Store<fromStore.ProductsModuleState>) { }

    // By ID
    loadProductoByID(ID: number) {
        return this.store.select(fromStore.getSelectedProducto).pipe(
            tap(data => {
                if (!data) { this.store.dispatch(new fromStore.LoadProductoByID(ID)); }
            }),
            filter((data) => data !== undefined), take(1));
    }
}
