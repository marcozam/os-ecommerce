import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { MarcaProducto, CategoriaProducto } from 'app/models/productos/producto.models';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoComponent implements OnInit {
  item$: Observable<MarcaProducto>;
  categorias$: Observable<CategoriaProducto[]>;
  form: FormGroup;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      'nombre': ['', Validators.required]
    });
  }

  ngOnInit() {
    // Listen for new values
    this.item$ = this.store.select(fromStore.getSelectedMarca).pipe(
      map(data => {
        if (data) {
          this.form.patchValue({
            nombre: data.nombre
          });
        }
        return data ? data : new MarcaProducto();
      })
    );
    this.categorias$ = this.store.select(fromStore.getAllCategories);
  }

  onSave(value) {
    if (this.form.invalid) {
      return;
    }
    console.log(value);
    /*
    this.item = Object.assign(this.item, value);
    this._marcaService.save(this.item)
      .subscribe(() => { this.dialog.openDialog(SuccessTitle, SuccessMessage, false); });
    */
  }
}
