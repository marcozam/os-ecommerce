import { Injectable } from '@angular/core';
import * as moment from 'moment';
// RxJs
import { map } from 'rxjs/operators';
// Models
import { Status } from 'models/general';
import { Producto } from 'models/productos';
import { MetodoPago } from 'models/facturacion';
import { Venta, DetalleVenta } from 'models/ventas';
import { ResumenVenta } from '../models/ventas-reporting.models';
// Services
import { BaseHttpService } from 'services/http/base-http.service';

@Injectable()
export class VentasReportingService {
  constructor(private db: BaseHttpService) { }

  mapList(list: any[]): Venta[] { return list.map(p => this.mapData(p)); }

  mapData(item: any): Venta {
    const venta = new Venta();
    venta.sumary.key = item.C0;
    venta.sumary.sucursal.nombre = item.R2;
    venta.sumary.fecha = moment(item.C1).toDate();
    venta.sumary.subTotal = item.C2;
    venta.sumary.impuestos = 0;
    venta.sumary.totalPagado = item.C3;
    venta.sumary.status = new Status();
    // STATUS
    venta.sumary.status.key = item.R3;
    venta.sumary.status.nombre = item.R2;
    // VENDEDOR
    venta.sumary.vendedor.key = item.C5;
    venta.sumary.vendedor.nombre = item.R5;
    // CLIENTE
    venta.sumary.cliente.key = item.C4;
    venta.sumary.cliente.persona.nombre = item.R1;

      return venta;
  }

  mapDetalleVentaData(item: any): DetalleVenta {
    const dv = new DetalleVenta(new Producto(item.C2));
    dv.productoVenta.key =  item.C0;
    dv.cantidad = item.C1;
    dv.precioUnitario = item.C3;
    dv.comentario = item.C10;
    return dv;
  }

  getOrdenesPendientesEntrega(sucursalID: number, clienteID: number) {
    const params = this.db.createParameter('ECOM0003', 3, {
      V4: sucursalID ? sucursalID : '',
      V8: clienteID ? clienteID : '',
    });
    return this.db.getData(params).pipe(
      map(result => this.mapList(result.Table))
    );
  }

  getHistorialCompras(clienteID: number) {
    const params = this.db.createParameter('ECOM0003', 4, { V3: clienteID ? clienteID : '' });
    return this.db.getData(params).pipe(
      map(result => this.mapList(result.Table))
    );
  }

  getResumenMensual(month: number, year: number, sucursalID: number) {
    const params = this.db.createParameter('ECOM0003', 1, { V4: sucursalID, V5: year, V6: month });
    return this.db.getData(params).pipe(
      map(data => {
        const _dResume = data.Table[0];
        const resumen: ResumenVenta = {
          totalVenta: _dResume.C1,
          totalPagado: _dResume.C2,
          noVentas: _dResume.C3,
          ingresos: data.Table1.map(ing => {
            const metodPago = new MetodoPago(ing.C1);
            metodPago.key = ing.C1;
            return { metodPago, monto: ing.C2 };
          }),
          lista: this.mapList(data.Table2)
        };
        return resumen;
      })
    );
  }
}
