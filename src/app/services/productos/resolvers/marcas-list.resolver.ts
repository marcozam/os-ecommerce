import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// RxJs
import { tap } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

@Injectable()
export class MarcasListResolver implements Resolve<void> {
    constructor(private store: Store<fromStore.ProductsModuleState>) { }
    resolve() { this.loadMarcas().subscribe(() => {}); }
    loadMarcas() {
        return this.store.select(fromStore.getMarcasLoaded).pipe(
            tap((loaded: boolean) => {
                if (!loaded) { this.store.dispatch(new fromStore.LoadMarcas()); }
            }));
    }
}
