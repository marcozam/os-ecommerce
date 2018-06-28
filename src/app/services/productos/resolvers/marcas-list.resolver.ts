import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// RxJs
import { tap, take } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

@Injectable()
export class MarcasListResolver implements Resolve<boolean> {
    constructor(private store: Store<fromStore.ProductsModuleState>) { }
    resolve() { return this.loadMarcas(); }
    loadMarcas() {
        return this.store.select(fromStore.getMarcasLoaded).pipe(
            take(1),
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadMarcas()); }
            }));
    }
}
