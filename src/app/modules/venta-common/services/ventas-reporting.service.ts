import { Injectable } from '@angular/core';
import * as moment from 'moment';
// RxJs
import { map } from 'rxjs/operators';
// Models
import { Status } from 'app/modules/base/models/base.models';
import { MetodoPago, Venta, DetalleVenta } from 'app/modules/venta/models/venta.models';
import { ResumenVenta, Ingresos } from '../models/ventas-reporting.models';
import { Producto } from 'models/productos/producto.models';
// Services
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';

@Injectable()
export class VentasReportingService {
    constructor(private db: BaseAjaxService) { }

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
                const resumen = new ResumenVenta();
                const _dResume = data.Table[0];
                resumen.totalVenta = _dResume.C1;
                resumen.totalPagado = _dResume.C2;
                resumen.noVentas = _dResume.C3;
                resumen.ingresos = data.Table1.map(ing => {
                    const mp = new MetodoPago(ing.C1);
                    mp.key = ing.C1;
                    return new Ingresos(mp, ing.C2);
                });
                resumen.lista = this.mapList(data.Table2);
                return resumen;
            })
        );
    }
}
