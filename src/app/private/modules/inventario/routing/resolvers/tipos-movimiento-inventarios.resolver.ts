import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/inventarios';
// Models
import { filter, first } from 'rxjs/operators';

@Injectable()
export class TipoMovimientoInventarioLoadedResolver implements Resolve<boolean> {

  constructor(private store$: Store<fromStore.InventarioModuleState>) { }

  resolve() {
    return this.store$.select(fromStore.selectTiposMovimientoInventarioLoaded).pipe(
      filter(loaded => {
        if (!loaded) {
          this.store$.dispatch(fromStore.GetTiposMovimientoInventario());
        }
        return loaded;
      }),
      first(),
    );
  }
}
