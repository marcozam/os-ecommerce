import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
// RxJs
import { Observable, of } from 'rxjs';

// Replace for Store
// import { ProductosService } from '../../../producto/services/productos.service';
// import { CategoriaProductoService } from '../../../producto/services/categoria-producto.service';
import { ListaPreciosService } from '../../../producto/services/lista-precios.service';

import { DetalleVenta } from '../../models/venta.models';
// CategoriaProducto
import { Producto, CategoriaProducto, PrecioProducto } from 'app/models/productos/producto.models';
import { OSBaseComponent } from '../../../base/typings/os-base.component';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss'],
  providers: [ListaPreciosService]
})
export class AddProductoComponent extends OSBaseComponent implements OnInit {
  categorias: CategoriaProducto[];
  preciosDetalle: PrecioProducto[];
  productos: Producto[];
  selectedProduct: Producto;

  @Input() listaPreciosID: number;
  @Output() onProdutoAdded: EventEmitter<DetalleVenta> = new EventEmitter<DetalleVenta>();

  @ViewChild('formAddProduct') form: FormControl;
  @ViewChild('cantidadField') field: ElementRef;

  constructor(private _listaPreciosService: ListaPreciosService) {
    super([]);
    // this.loading$ = merge(_productoService.loading$);
  }

  createSubscriptions() {
    /*
    this._categoriaService.source$
      .subscribe((r: CategoriaProducto[]) => {
        this.categorias = r.map(cat => new CategoriaProducto(cat));
        this.categorias.forEach(cat => {
          this._productoService.getProductsByCategory(cat.sumary.key)
            .subscribe((products: Producto[]) => {
              cat.productos = products.map(prod => {
                const precio = this.preciosDetalle.find(p => p.productoID === prod.key);
                prod.precio = precio ? precio.precio : 0;
                return prod;
              });
            });
        });
      });
      */
  }

  ngOnInit() {
    this.createSubscriptions();
    this._listaPreciosService.getPreciosPreductos(this.listaPreciosID)
      .subscribe((precios: PrecioProducto[]) => {
        this.preciosDetalle = precios;
        this.field.nativeElement.focus();
        // this._categoriaService.getStandAloneCategories();
      });
  }

  cleanData() {
    this.form.reset({
      cantidad: '',
      precio: 0,
      categoriaID: 0,
      productoID: 0
    });
    this.field.nativeElement.focus();
  }

  searchProductBySKU(sku: string) {
    console.log(sku);
    // let rval = null;
    // let prods: Observable<Producto[]>;
    // this.categorias.forEach(cat => {
      // prods = cat.productos$.pipe(map(list => list.filter(prod => prod.SKU === sku)));
      // if (prods.length > 0) { rval = prods[0]; }
    // });
    // return rval;
    return [];
  }

  addDetalleVenta(producto$: Observable<Producto>, cantidad: number) {
    producto$.subscribe(producto => {
        const dv = new DetalleVenta(producto);
        dv.cantidad = cantidad;
        dv.precioUnitario = producto.precio;
        dv.canEditPrecio = false;
        dv.canEditCantidad = true;
        dv.canBeRemoved = true;
        this.onProdutoAdded.emit(dv);
        this.cleanData();
      });
  }

  onCantidadKeyDown(event) {
    const currentValue: string = event.target.value;
    let cantidad = 1;
    let codigo: string;
    // let producto: Observable<Producto>;
    if (event.keyCode === 42 && currentValue.includes('*')) { return false; }
    if (event.keyCode === 13) {
      if (currentValue.includes('*')) {
        const parts = currentValue.split('*');
        cantidad = Number.parseFloat(parts[0]);
        cantidad = Number.isNaN(cantidad) ? 1 : cantidad;
        codigo = parts[1];
      } else {
        // Revisa si el valor es un codigo de barras
        if (currentValue.length >= 8) { codigo = currentValue; }
      }
      console.log(codigo);
      /*
      if (codigo) {
        producto = this.searchProductBySKU(codigo).pipe(map(list => list.length > 0 ? list[0] : null));
        if (producto) { this.addDetalleVenta(producto, cantidad); }
      }
      */
    }
  }

  onCategoriaChanged(productos: Producto[]) { this.productos = productos; }

  onProductoChange(producto: Producto) { this.selectedProduct = producto; }

  addProduct(value) {
    let cantidad = Number.isNaN(value) ? 1 : Number(value);
    if (cantidad <= 0) { cantidad = 1; }
    if (this.selectedProduct) {
      this.addDetalleVenta(of(this.selectedProduct), cantidad);
    }
  }
}
