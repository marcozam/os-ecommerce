import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// NgRx
import { Actions } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/productos';
// Services
import { DialogBoxService } from 'app/common/services';
// Common forms
import { OSBaseFormContainer } from 'app/common-forms/components';
// Models
import { MarcaProducto, CategoriaProducto } from 'models/productos';
import { MARCA_PRODUCTO_FORM } from '../../constants';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoComponent extends OSBaseFormContainer<MarcaProducto, MarcaProducto> {
  categorias$: Observable<CategoriaProducto[]>;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder,
    actions$: Actions,
    dialog: DialogBoxService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(dialog, actions$, router, route, fromStore.MARCAS_ACTION_TYPES.SAVE_MARCA_SUCCESS);
    //#region Get Store Date
    this.loading$ = this.store.select(fromStore.getMarcasLoading);
    this.categorias$ = this.store.select(fromStore.getAllCategories);
    this.item$ = this.store.select(fromStore.getSelectedMarca)
      .pipe(map(data => data ? data : new MarcaProducto()));
    //#endregion

    this.form = this.fb.group({
      ...MARCA_PRODUCTO_FORM,
      'categorias': this.fb.array([])
    });
  }

  onSave(newItem: MarcaProducto) {
    this.store.dispatch(new fromStore.SaveMarca(newItem, this.item));
  }
}
