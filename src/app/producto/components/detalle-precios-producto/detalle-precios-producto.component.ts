import { Component, OnInit, Input } from '@angular/core';
// RxJs
// import { map } from 'rxjs/operators';
// Models
import { CategoriaProducto, PrecioProducto } from 'app/models/productos';
// Services
// import { ProductosService } from 'app/producto/services/productos.service';
// import { ListaPreciosService } from '../../services/lista-precios.service';
// import { CategoriaProductoService } from 'app/producto/services/categoria-producto.service';
import { DialogBoxService } from 'app/common';
// Constants
// import { SuccessTitle, SuccessMessage } from 'app/modules/base/constants/messages.contants';

@Component({
  selector: 'app-detalle-precios-producto',
  templateUrl: './detalle-precios-producto.component.html',
  styleUrls: ['./detalle-precios-producto.component.scss']
})
export class DetallePreciosProductoComponent implements OnInit {
  @Input()
  listaPreciosID: number;

  categorias: CategoriaProducto[];
  preciosDetalle: PrecioProducto[];

  constructor(
    // private _service: ProductosService,
    // private _listaPreciosService: ListaPreciosService,
    public dialog: DialogBoxService) {
    // _service, _listaPreciosService
    // super([]);
  }

  ngOnInit() {
    // Listen to Categories
    /*
    this._categoriaService.source$.subscribe((result: CategoriaProducto[]) => {
      this.categorias = result.map(cat => new CategoriaProducto(cat));
      this.categorias.forEach(cat => {
        this._service.getProductsByCategory(Number(cat.sumary.key))
          .subscribe((products => {
            if (products.length > 0) {
              cat.productos = products.map(prod => {
                const precio = this.preciosDetalle.find(p => p.productoID === prod.key);
                prod.precio = precio ? precio.precio : 0;
                return prod;
              });
            }
          }));
      });
    });
    */
    /*
    this._listaPreciosService.getPreciosPreductos(this.listaPreciosID)
      .subscribe((precios: PrecioProducto[]) => {
        this.preciosDetalle = precios;
        // this._categoriaService.getStandAloneCategories();
      });
    */
  }

  onSave(data) {
    console.log(data);
    /*
    const precios: PrecioProducto[] = [];
    this.categorias.forEach(cat => {
      const pCat = data.productos[cat.sumary.key];
      cat.productos$.pipe(map( list => {
        return list.map(prod => {
          const precio = new PrecioProducto(+prod.key);
          precio.listaPreciosID = this.listaPreciosID;
          precio.precio = pCat[prod.key].precio;
          precios.push(precio);
        });
      }));
    });
    this._listaPreciosService.setPreciosProductos(this.listaPreciosID, precios, () => {
      this.dialog.openDialog(SuccessTitle, SuccessMessage, false);
    });
    */
  }
}
