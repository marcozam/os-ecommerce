import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/inventarios';
// RxJs
import { filter, first } from 'rxjs/operators';
// Models
import { Inventario } from 'models/inventario';

@Injectable()
export class InventarioLoadedResolver implements Resolve<Inventario[]> {

  constructor(private store$: Store<fromStore.InventarioModuleState>) { }

  resolve() {
    return this.store$.select(fromStore.selectInvetario).pipe(
      filter(inventario => {
        if (inventario.length <= 0) {
          this.store$.dispatch(fromStore.GetInventario());
        }
        return inventario.length > 0;
      }),
      first(),
    );
  }
}
