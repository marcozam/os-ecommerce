import { Component, OnInit } from '@angular/core';
// RxJs
import { Observable } from 'rxjs/Observable';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { MarcaProducto } from 'app/models/productos';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.scss']
})
export class MarcasListComponent implements OnInit {

  marcas$: Observable<MarcaProducto[]>;
  tableColumns = ['nombre', 'actions'];

  constructor(private store: Store<fromStore.ProductsModuleState>) { }

  ngOnInit() {
    this.marcas$ = this.store.select(fromStore.getMarcas);
  }

}
