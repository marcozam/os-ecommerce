import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// RxJs
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { Producto, CategoriaProducto } from 'app/models/productos';


@Component({
  selector: 'app-producto-detail',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosComponent {
  item$: Observable<Producto> = this.store.select(fromStore.getSelectedProducto)
    .pipe(map(data => data ? data : new Producto('')));
  categoria$: Observable<CategoriaProducto> = this.store.select(fromStore.getSelectedCategoria);
  loading$: Observable<boolean> = this.store.select(fromStore.getProductossLoading);
  form: FormGroup;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) { this.createForm(); }

  createForm() {
    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'SKU': [''],
      'marcaProductoID': [0, Validators.required]
    });
  }

  onCancelar(data: any) {
    console.log(data);
    /*
    if (this.product$.hasChanges(data)) {
      this.dialog.openDialog(WarningTitle, LeaveWarningMessage, true, result => {
        if (result) {
          this.router.navigate(['../'], { relativeTo: this.route});
        }
      });
    } else {
      this.router.navigate(['../'], { relativeTo: this.route});
    }
    */
  }

  onSave(data: Producto) {
    console.log(data);
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
