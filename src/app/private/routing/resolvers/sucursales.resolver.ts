import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// RxJs
import { filter, first } from 'rxjs/operators';
// Stores
import { Store } from '@ngrx/store';
import * as fromStore from 'store/base-catalogs';

@Injectable()
export class SucursalesLoadedResolver implements Resolve<boolean> {

  constructor(private store$: Store<fromStore.BaseCatalogsModuleState>) { }

  resolve() {
    return this.store$.select(fromStore.selectSucursalesLoaded).pipe(
      filter(loaded => {
        if (!loaded) {
          this.store$.dispatch(fromStore.LoadSucursalesAction());
        }
        return loaded;
      }),
      first()
    );
  }
}
