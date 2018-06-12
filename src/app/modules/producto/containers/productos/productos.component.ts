import { Component, OnInit } from '@angular/core';
// RxJs
import { Observable } from 'rxjs/observable';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';

// Consants
// SuccessTitle, SuccessMessage,
// import { WarningTitle, LeaveWarningMessage } from 'app/modules/base/constants/messages.contants';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
// Models
import { CategoriaProducto, Producto } from 'app/models/productos/producto.models';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [DialogBoxService]
})
export class ProductosComponent implements OnInit {
  product$: Observable<Producto>;
  categorias$: Observable<CategoriaProducto[]>;

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    public dialog: DialogBoxService
  ) { }

  ngOnInit() {
    // this.product$ = this.store.select(fromStore.getSelectedProducto);
    this.categorias$ = this.store.select(fromStore.getStandAloneCategories);
  }

  onCancelar(data: any) {
    console.log(data);
    /*
    if (this.product$.hasChanges(data)) {
      this.dialog.openDialog(WarningTitle, LeaveWarningMessage, true, result => {
        if (result) {
          this.router.navigate(['../..'], { relativeTo: this.route});
        }
      });
    } else {
      this.router.navigate(['../..'], { relativeTo: this.route});
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
