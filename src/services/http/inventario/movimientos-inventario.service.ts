import { Injectable } from '@angular/core';
import * as moment from 'moment';
// RxJs
import { map } from 'rxjs/operators';
// Http Services
import { GenericCatalogService } from '../generic-catalogs';
// Models
import { MovimientoInventario, TipoMovimientoInventario } from 'models/inventario';
import { Producto, CategoriaProducto } from 'models/productos';

@Injectable()
export class MovimientosInventarioService {

  private catalogoTipoMovimientoInventario = 802;

  constructor(private db: GenericCatalogService) { }

  mapList(list: any[]) { return list.map(p => this.mapData(p)); }

  mapData(item: any) {
    // Categoria
    const cat = new CategoriaProducto(item.C4);
    cat.key = item.C3;
    // Producto
    const prod = new Producto(item.C1, cat);
    prod.key = item.C0;
    prod.categoriaProductoID = item.C3;
    // Tipo Movimiento
    const tm = new TipoMovimientoInventario();
    tm.key = item.C6;
    tm.nombre = item.C7;
    // Movimiento
    const mi = new MovimientoInventario(prod);
    mi.producto = prod;
    mi.cantidad = item.C5;
    mi.tipoMovimiento = tm;
    // Fecha
    mi.fecha = moment(item.C9).toDate();
    // item.C9
    return mi;
  }

  getMovimientos(sucursalID: number, fechaInicio: Date, fechaFin: Date, callback) {
    const params = this.db.createParameter('INV0002', 1, {
      'V4': sucursalID,
      'V6': fechaInicio.toJSON(),
      'V7': fechaFin.toJSON()
    });
    return this.db.getData(params).pipe(
      map(res => this.mapList(res.Table))
    );
  }

  getTipoMovimientos() {
    this.db.getAllDataFromCatalog(this.catalogoTipoMovimientoInventario).pipe(
      map((res: any[]) => res.map(tm => {
        const item = new TipoMovimientoInventario();
        item.key = tm.C0;
        item.nombre = tm.C1;
        return item;
      })));
  }
}
