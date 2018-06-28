import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// RxJs
import { take, map, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { CategoriaProducto } from 'app/models/productos';


@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaProductoComponent {
  item$: Observable<CategoriaProducto> = this.store.select(fromStore.getSelectedCategoria)
    .pipe(map((data) => data ? data :  new CategoriaProducto('')));
  loading$: Observable<boolean> = this.store.select(fromStore.getCategoriasLoading);
  form: FormGroup;
  // catalogos: MetaDataCatalog[];

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) {
    this.createForm();
    // When is loading all fields are disabled
    this.loading$.subscribe(loading => {
      loading ? this.form.disable() : this.form.enable();
    });
    const subs = this.item$.subscribe(data => {
      if (data.key > 0) {
        this.form.patchValue({ ...data });
        subs.unsubscribe();
      }
    });
  }

  createForm() {
    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'catalogoID': [0, Validators.required],
      'usaInventario': [true, Validators.required]
    });
  }

  onSave(value: any) {
    this.item$.pipe(take(1))
      .subscribe((currentItem: CategoriaProducto) => {
        this.store.dispatch(new fromStore.SaveCategoria({...currentItem, ...value}, currentItem));
      });
  }
}
