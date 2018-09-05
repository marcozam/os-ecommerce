import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// RxJs
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import {
  Producto,
  CategoriaProducto,
  FormSaveEvent
} from 'app/models';


@Component({
  selector: 'app-producto-detail',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosComponent {
  //#region Get Store Date
  item$: Observable<Producto> = this.store.select(fromStore.getSelectedProducto)
    .pipe(map(data => data ? data : new Producto('')));
  categoria$: Observable<CategoriaProducto> = this.store.select(fromStore.getSelectedCategoria);
  loading$: Observable<boolean> = this.store.select(fromStore.getProductossLoading);
  //#endregion

  form: FormGroup;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'SKU': [''],
      'marcaProductoID': [0, Validators.required]
    });
  }

  onSave(event: FormSaveEvent<Producto>) {
    this.store.dispatch(new fromStore.SaveProducto(event.new));
    /*
    const workingItem = Object.assign(this.product, data);
    this._service.save(workingItem,
      () => {
        this.router.navigate(['../..'], { relativeTo: this.route});
        this.dialog.openDialog(SuccessTitle, SuccessMessage, false);
      },
      () => {}, `os_producto_categoria-${workingItem.categoriaProductoID}`);
      */
  }
}
