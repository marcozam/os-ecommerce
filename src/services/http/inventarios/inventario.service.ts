import { Injectable } from '@angular/core';
// RxJs
import { map } from 'rxjs/operators';
// Services
import { BaseHttpService } from '../base-http.service';
// Models
import { Inventario } from 'models/inventario';
import { Producto, CategoriaProducto } from 'models/productos';

@Injectable()
export class InventarioService {

  constructor(private db: BaseHttpService) { }

  mapData(item: any) {
    const cat = new CategoriaProducto(item.C6);
    cat.key = item.C4;

    const prod = new Producto(item.C1);
    prod.key = item.C0;
    prod.categoriaProductoID = Number(cat.key);
    prod.categoriaProducto = cat;

    const inv = new Inventario();
    inv.key = item.C2;
    inv.productoID = Number(prod.key);
    inv.producto = prod;
    inv.cantidad = item.C3;
    inv.ubicacionlID = item.C5;
    return inv;
  }

  mapInventario2Server(inventario: Inventario[]) {
    let ret = ['C0,C1'];
    ret = ret.concat(
      inventario.map(inv => {
        return `${inv.producto ? inv.producto.key : inv.productoID},${inv.cantidadFisica}`;
      }));
    return ret.join('&');
  }

  getInventarioProducto(productoID: number, sucursalID: number) {
    const params = this.db.createParameter('INV0002', 2, {
      'V3': productoID,
      'V4': sucursalID
    });
    return this.db.getData(params).pipe(
      map(result => {
        return result.Table.length > 0 ? this.mapData(result.Table[0]) : {};
      })
    );
  }

  getInventarioActual(sucursalID: number) {
    const params = this.db.createParameter('INV0001', 1, { 'V4': sucursalID });
    return this.db.getData(params);
  }

  realizarCorte(sucursalID: number, inventario: Inventario[]) {
    // Envia solo los producto con cantidad distinta
    const inventario2Send = inventario.filter(inv => inv.cantidad !== inv.cantidadFisica && inv.cantidadFisica);
    const params = this.db.createParameter('INV0001', 3, {
      'V4': sucursalID,
      'V6': this.mapInventario2Server(inventario2Send)
    });
    return this.db.getData(params);
  }
}
