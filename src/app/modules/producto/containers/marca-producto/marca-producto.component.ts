import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// NgRx
import { Actions } from '@ngrx/effects';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Components
import { OSBaseFormContainer } from 'app/modules/shared';
// Notifications
import { PRODUCTOS_NOTIFICATIONS } from 'app/notifications';
// Models
import { MarcaProducto, CategoriaProducto } from 'app/models/productos';
// TODO: Move to other place
import { DialogBoxService } from 'app/services/dialog-box.service';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoComponent extends OSBaseFormContainer<MarcaProducto> {
  categorias$: Observable<CategoriaProducto[]>;

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
      fromStore.MARCAS_ACTION_TYPES.SAVE_MARCA_SUCCESS,
      fromStore.MARCAS_ACTION_TYPES.SAVE_MARCA_FAIL,
      PRODUCTOS_NOTIFICATIONS
    );
    //#region Get Store Date
    this.categorias$ = this.store.select(fromStore.getAllCategories);
    this.item$ = this.store.select(fromStore.getSelectedMarca)
      .pipe(map(data => data ? data : new MarcaProducto()));
    this.loading$ = this.store.select(fromStore.getMarcasLoading);
    //#endregion

    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'categorias': this.fb.array([])
    });
  }

  onSave(newItem: MarcaProducto) {
    this.store.dispatch(new fromStore.SaveMarca(newItem, this.item));
  }
}
