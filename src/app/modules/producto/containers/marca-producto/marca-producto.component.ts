import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { FormSaveEvent } from 'app/models';
import { MarcaProducto, CategoriaProducto } from 'app/models/productos';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoComponent {
  item$: Observable<MarcaProducto> = this.store.select(fromStore.getSelectedMarca)
    .pipe(map(data => data ? data : new MarcaProducto()));
  categorias$: Observable<CategoriaProducto[]> = this.store.select(fromStore.getAllCategories);
  loading$: Observable<boolean> = this.store.select(fromStore.getMarcasLoading);
  form: FormGroup;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) { this.createForm(); }

  createForm() {
    this.form = this.fb.group({
      'nombre': ['', Validators.required]
    });
  }

  onSave(event: FormSaveEvent<MarcaProducto>) {
    console.log(event);
    /*
    this._marcaService.save(this.item)
      .subscribe(() => { this.dialog.openDialog(SuccessTitle, SuccessMessage, false); });
    */
  }
}
