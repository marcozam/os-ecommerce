import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/productos';
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

  constructor(router: Router, route: ActivatedRoute, store: Store<fromStore.ProductsModuleState>) {
    super(router, route, store.select(fromStore.getMarcas));
  }
}
