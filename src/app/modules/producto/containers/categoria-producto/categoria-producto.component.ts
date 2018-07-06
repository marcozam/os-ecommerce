import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { FormSaveEvent } from 'app/models';
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
  // Grupos
  get usaGrupos(): boolean {
    return this.form.value.tieneGrupos;
  }
  nombreGrupo: string;
  grupos = [];

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder
  ) { this.createForm(); }

  createForm() {
    this.form = this.fb.group({
      'nombre': ['', Validators.required],
      'catalogoID': [0, Validators.required],
      'usaInventario': [true, Validators.required],
      'requireProcesamiento': [false, Validators.required],
      'tieneGrupos': [false, Validators.required],
      'formatoNombre': ['']
    });
  }

  addGroup(value: string) {
    if (value) {
      this.nombreGrupo = '';
      this.grupos = [ ...this.grupos, value ];
    }
  }

  onSave(event: FormSaveEvent<CategoriaProducto>) {
    this.store.dispatch(new fromStore.SaveCategoria(event.new, event.old));
  }
}
