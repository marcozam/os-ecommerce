import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/crm';
// Models
import { filter, first } from 'rxjs/operators';

@Injectable()
export class TipoDatoContactoLoadedResolver implements Resolve<boolean> {

  constructor(private store$: Store<fromStore.CRMModuleState>) { }

  resolve() {
    return this.store$.select(fromStore.selectTipoDatoContactoLoaded).pipe(
      filter(loaded => {
        if (!loaded) {
          this.store$.dispatch(fromStore.LoadTipoDatoContactosAction());
        }
        return loaded;
      }),
      first(),
    );
  }
}
