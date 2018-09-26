import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
// RxJs
import { map } from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import * as fromStore from 'app/root-store/productos-store';
// Components
import { OSBaseFormContainer } from 'app/modules/shared';
// Services
import { DialogBoxService } from 'app/services/dialog-box.service';
// Models
import { CategoriaProducto } from 'app/models/productos';
// Constants
import { CATEGORIA_PRODUCTO_FORM } from '../../constants';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaProductoComponent extends OSBaseFormContainer<CategoriaProducto> {
  // catalogos: MetaDataCatalog[];
  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder,
    actions$: Actions,
    dialog: DialogBoxService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(dialog, actions$, router, route, fromStore.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_SUCCESS);
    this.form = this.fb.group(CATEGORIA_PRODUCTO_FORM);
    //#region Get Store Data
    this.loading$ = this.store.select(fromStore.getCategoriasLoading);
    // TODO: Look for a nicer way to do it
    this.item$ = this.store.select(fromStore.getSelectedCategoria)
      .pipe(map((data) => data ? data :  new CategoriaProducto('')));
    //#endregion
  }

  onSave(newItem: CategoriaProducto) {
    this.store.dispatch(new fromStore.SaveCategoria(newItem, this.item));
  }
}
