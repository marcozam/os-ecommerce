import { Component } from '@angular/core';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'ngrx-store/productos-store';
// Models
import { MarcaProducto } from 'models/productos';
import { OSListComponent, OSTableColumn } from 'app/common';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.scss']
})
export class MarcasListComponent extends OSListComponent<MarcaProducto> {
  tableColumns = [
    new OSTableColumn('nombre', 'Nombre', (item: MarcaProducto) => item.nombre)
  ];
  constructor(store: Store<fromStore.ProductsModuleState>) {
    super(store.select(fromStore.getMarcas));
  }
}
