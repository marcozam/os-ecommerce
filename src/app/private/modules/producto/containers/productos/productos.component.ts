import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
// NgRx
import { Actions } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/productos';
// Shared
// Services
import { DialogBoxService } from 'app/common/services';
// Common forms
import { OSBaseFormContainer } from 'app/common-forms/components';
// Models
import { Producto, CategoriaProducto } from 'models';
// Constants
import { PRODUCTO_FORM } from '../../constants';


@Component({
  selector: 'app-producto-detail',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosComponent extends OSBaseFormContainer<Producto, Producto> {
  categoria: CategoriaProducto;
  categoria$: Observable<CategoriaProducto>;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder,
    actions$: Actions,
    dialog: DialogBoxService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(dialog, actions$, router, route, fromStore.SaveProductoSuccess);
    //#region Get Store Data
    // TODO: Look for a nicer way to do it
    this.categoria$ = this.store.select(fromStore.getSelectedCategoria)
      .pipe(tap(value => this.categoria = value));
    this.item$ = this.store.select(fromStore.selectSelectedProducto)
      .pipe(map(data => data ? data : new Producto('')));
    //#endregion

    this.form = this.fb.group(PRODUCTO_FORM);
  }

  onSave(value: Producto) {
    value.categoriaProducto = this.categoria;
    this.store.dispatch(fromStore.SaveProducto({ payload: { value } }));
  }
}
