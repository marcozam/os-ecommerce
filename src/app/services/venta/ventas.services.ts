import { Injectable } from '@angular/core';
import * as moment from 'moment';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Services
import { BaseAjaxService } from '../base-ajax.service';
// Models
import {
    Venta,
    Status,
    DetalleVenta,
    Producto,
    DetallePagos,
    MetodoPago,
    VentaComment
} from 'app/models';

@Injectable()
export class VentaService {
    constructor(private db: BaseAjaxService) { }

    /* ===> MAPPINGS <=== */
    mapDetalleVentaData(item: any): DetalleVenta {
        const dv = new DetalleVenta(new Producto(item.C2));
        dv.productoVenta.key =  item.C0;
        dv.cantidad = item.C1;
        dv.precioUnitario = item.C3;
        dv.comentario = item.C10;
        return dv;
    }

    mapDetallePagosData(item: any): DetallePagos {
        const dp = new DetallePagos();
        dp.key = item.C0;
        dp.fecha = moment(item.C3).toDate();
        dp.metodoPago = new MetodoPago();
        dp.metodoPago.nombre = item.C1;
        dp.monto = item.C2;
        dp.totalRecibido = item.C6;
        dp.esPagoInicial = item.C4;
        dp.corteID = item.C5;
        return dp;
    }

    mapComentariosData(item: any): VentaComment {
        const c = new VentaComment(item.C2);
        c.key = item.C0;
        c.productoID = item.C1;
        return c;
    }

    mapList(list: any[]): Venta[] { return list.map(p => this.mapData(p)); }

    mapData(item: any): Venta {
        const venta = new Venta();
        venta.sumary.key = item.C0;
        venta.sumary.fecha = moment(item.C1).toDate();
        venta.sumary.subTotal = item.C2;
        venta.sumary.impuestos = 0;
        venta.sumary.totalPagado = item.C3;
        venta.sumary.status = new Status();
        // SUCURSAL
        venta.sumary.sucursal.nombre = item.R2;
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

    getByID(ID: number): Observable<Venta> {
        const params = this.db.createParameter('ECOM0003', 2, { V3: ID });
        /*
        this._contactoService.getByID(venta.sumary.cliente.key)
            .subscribe((result) => {
                venta.sumary.cliente = result;
                observable$.next(venta);
            });
        */
        return this.db.getData(params).pipe(
            map(data => {
                const venta = this.mapData(data.Table[0]);
                venta.updateDetalleVenta(data.Table1.map( row => this.mapDetalleVentaData(row)));
                venta.pagos = data.Table2.map( row => this.mapDetallePagosData(row));
                venta.comentarios = data.Table3.map( row => this.mapComentariosData(row));
                return venta;
            })
        );
    }
}
