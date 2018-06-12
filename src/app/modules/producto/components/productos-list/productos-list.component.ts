import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs
import { Observable } from 'rxjs/Observable';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
// Models
import { Producto, CategoriaProducto } from 'app/models/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss'],
  providers: [DialogBoxService]
})
export class ProductosListComponent implements OnInit {
  categoria$: Observable<CategoriaProducto>;
  productos$: Observable<Producto[]>;
  tableColumns = ['nombre', 'actions'];

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // Services
    public dialog: DialogBoxService
  ) { }

  ngOnInit() {
    this.categoria$ = this.store.select(fromStore.getSelectedCategoria);
    this.productos$ = this.store.select(fromStore.getProductosBySelectedCategory);
  }

  onDelete(item: Producto) {
    console.log(item);
  }

  onEdit(item: Producto) {
    this.router.navigate([`[detail/${item.key}`], { relativeTo: this.activatedRoute });
  }

  onAdd() {
    // this.router.navigate(['detail/0'], { relativeTo: this.activatedRoute });
  }
}
