import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
// NgRx
import { Actions } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// TODO: Move to other place
import { DialogBoxService } from 'app/services/dialog-box.service';
// Models
import { Producto, CategoriaProducto } from 'app/models';
// Components
import { OSBaseFormContainer } from 'app/modules/shared';
// Notifications
import { PRODUCTOS_NOTIFICATIONS } from 'app/notifications';


@Component({
  selector: 'app-producto-detail',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosComponent extends OSBaseFormContainer<Producto> {
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
    super(
      dialog, actions$, router, route,
      fromStore.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_SUCCESS,
      fromStore.PRODUCTOS_ACTION_TYPES.SAVE_PRODUCTO_FAIL,
      PRODUCTOS_NOTIFICATIONS
    );
    //#region Get Store Data
    // TODO: Look for a nicer way to do it
    this.categoria$ = this.store.select(fromStore.getSelectedCategoria)
      .pipe(tap(value => this.categoria = value));
    this.loading$ = this.store.select(fromStore.getProductossLoading);
    this.item$ = this.store.select(fromStore.getSelectedProducto)
      .pipe(map(data => data ? data : new Producto('')));
    //#endregion

    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'SKU': [''],
      'marcaProductoID': [0, Validators.required]
    });
  }

  onSave(newItem: Producto) {
    newItem.categoriaProducto = this.categoria;
    this.store.dispatch(new fromStore.SaveProducto(newItem));
  }
}
