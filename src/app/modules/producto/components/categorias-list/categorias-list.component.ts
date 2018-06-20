import { Component, OnInit } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Models
import { CategoriaProducto } from 'app/models/productos/producto.models';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {
  categorias$: Observable<CategoriaProducto[]>;

  constructor(private store: Store<fromStore.ProductsModuleState>) { }

  ngOnInit() {
    this.categorias$ = this.store.select(fromStore.getStandAloneCategories);
  }
}
