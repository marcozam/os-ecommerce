import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// RxJs
import { tap, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
// import { MetaDataCatalog } from 'app/modules/generic-catalogs/models/metadata-catalogs.models';
import { CategoriaProducto } from 'app/models/productos/producto.models';


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
      tap(data => {
        if (data) {
          this.form.patchValue({
            nombre: data.nombre
          });
        } else {
          console.log('Should clear data?');
        }
      })
    );
  }

  onSave(value) {
    console.log(value);
    // this.item = Object.assign(this.item, value);
    /*
    this._categoriaService.save(this.item)
      .subscribe(() => { this.dialog.openDialog(SuccessTitle, SuccessMessage, false); });
    */
  }
}
