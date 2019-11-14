import { Component, ChangeDetectionStrategy } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store/productos';
// Models
import { CategoriaProducto } from 'models/productos';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriasListComponent {

  categorias$: Observable<CategoriaProducto[]> = this.store$.select(fromStore.getStandAloneCategories);
  tableColumns = ['nombre', 'inventario', 'requireProcesamiento', 'actions'];

  constructor(private store$: Store<fromStore.ProductsModuleState>) { }

}
