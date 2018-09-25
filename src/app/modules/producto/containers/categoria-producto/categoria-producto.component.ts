import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
// RxJs
import { map } from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { CategoriaProducto, GrupoCategoriaProducto } from 'app/models/productos';
import { OSBaseFormContainer } from 'app/modules/shared';
import { DialogBoxService } from 'app/services/dialog-box.service';
import { Actions } from '@ngrx/effects';
import { Router, ActivatedRoute } from '@angular/router';
import { PRODUCTOS_NOTIFICATIONS } from 'app/notifications';

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
    super(dialog, actions$, router, route,
      fromStore.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_SUCCESS,
      fromStore.CATEGORIAS_ACTION_TYPES.SAVE_CATEGORIA_FAIL,
      PRODUCTOS_NOTIFICATIONS
    );
    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'catalogoID': [0, Validators.required],
      'usaInventario': [true, Validators.required],
      'requireProcesamiento': [false, Validators.required],
      'tieneGrupos': [false, Validators.required],
      'formatoNombre': ['']
    });
    //#region Get Store Data
    // TODO: Look for a nicer way to do it
    this.item$ = this.store.select(fromStore.getSelectedCategoria)
      .pipe(map((data) => data ? data :  new CategoriaProducto('')));
    this.loading$ = this.store.select(fromStore.getCategoriasLoading);
    //#endregion
  }

  onSave(newItem: CategoriaProducto) {
    this.store.dispatch(new fromStore.SaveCategoria(newItem, this.item));
  }
}
