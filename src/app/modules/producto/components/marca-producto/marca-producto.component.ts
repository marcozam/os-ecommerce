import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// RxJs
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
// import { CategoriaProductoService } from '../../services/categoria-producto.service';
// Models
import { MarcaProducto, CategoriaProducto } from 'app/models/productos/producto.models';
import { tap } from 'rxjs/operators';
// Constants
// import { SuccessTitle, SuccessMessage } from 'app/modules/base/constants/messages.contants';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogBoxService ]
})
export class MarcaProductoComponent implements OnInit {
  item$: Observable<MarcaProducto>;
  categorias$: Observable<CategoriaProducto[]>;
  form: FormGroup;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private fb: FormBuilder,
    public dialog: DialogBoxService
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
      tap(data => {
        this.form.patchValue({
          nombre: data.nombre
        });
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
