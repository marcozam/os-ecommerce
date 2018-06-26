import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// RxJs
import { take, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { CategoriaProducto } from 'app/models/productos';


@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss']
})
export class CategoriaProductoComponent implements OnInit {
  item$: Observable<CategoriaProducto>;
  form: FormGroup;
  // catalogos: MetaDataCatalog[];

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'catalogoID': [0, Validators.required],
      'usaInventario': [true, Validators.required]
    });
  }

  ngOnInit() {
    this.item$ = this.store.select(fromStore.getSelectedCategoria).pipe(
      map(data => {
        if (data) {
          this.form.patchValue({ ...data });
        }
        return data ? data : new CategoriaProducto('');
      })
    );
  }

  onSave(value: any) {
    this.item$.pipe(take(1))
      .subscribe((currentItem: CategoriaProducto) => {
        this.store.dispatch(new fromStore.SaveCategoria({...currentItem, ...value}, currentItem));
      });
  }
}
