import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Consants
import { SuccessTitle, SuccessMessage, WarningTitle, LeaveWarningMessage } from 'app/modules/base/constants/messages.contants';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
import { CategoriaProductoService } from '../../services/categoria-producto.service';
import { ProductosService } from '../../services/productos.service';
// Models
import { CategoriaProductoSumary, Producto } from '../../models/producto.models';
import { OSBaseComponent } from 'app/modules/base/typings/os-base.component';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService, CategoriaProductoService, DialogBoxService]
})
export class ProductosComponent extends OSBaseComponent implements OnInit {
  productoID: number;
  product: Producto;
  categorias: CategoriaProductoSumary[];

  constructor(
    private route: ActivatedRoute,
    private _service: ProductosService,
    private _categoriasService: CategoriaProductoService,
    private router: Router,
    public dialog: DialogBoxService) {
    super([_categoriasService, _service]);
    this.product = new Producto('');
  }

  createSubscriptions() {
    this._categoriasService.source$.subscribe(result => this.categorias = result);
  }

  ngOnInit() {
    this.productoID = Number(this.route.snapshot.params['id']);

    this.createSubscriptions();
    this._categoriasService.getStandAloneCategories();

    if (this.productoID !== 0) {
      this._service.getByID(this.productoID)
        .subscribe((item: Producto) => this.product = item);
    }
  }

  onCancelar(data: any) {
    if (this.product.hasChanges(data)) {
      this.dialog.openDialog(WarningTitle, LeaveWarningMessage, true, result => {
        if (result) {
          this.router.navigate(['../..'], { relativeTo: this.route});
        }
      });
    } else {
      this.router.navigate(['../..'], { relativeTo: this.route});
    }
  }

  onSave(data: Producto) {
    const workingItem = Object.assign(this.product, data);
    this._service.save(workingItem,
      () => {
        this.router.navigate(['../..'], { relativeTo: this.route});
        this.dialog.openDialog(SuccessTitle, SuccessMessage, false);
      },
      () => {}, `os_producto_categoria-${workingItem.categoriaProductoID}`);
  }
}
