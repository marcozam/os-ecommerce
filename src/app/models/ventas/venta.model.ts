import { Subject } from 'rxjs';

import {
    DetalleVenta,
    DetallePagos,
    VentaComment,
    VentaSummary
} from '.';

export class Venta {

    private _detalle: DetalleVenta[] = [];
    get detalle(): DetalleVenta[] { return this._detalle; }

    pagos: DetallePagos[];
    comentarios: VentaComment[];
    sumary: VentaSummary;

    // used to validate products stock
    onDetalleChanged: Subject<DetalleVenta[]> = new Subject();

    constructor() {
        this.pagos = new Array<DetallePagos>();
        this.comentarios = new Array<VentaComment>();
        this.sumary = new VentaSummary();
    }

    updateDetalleVenta(items: DetalleVenta[], concat: boolean = true) {
        const changes: DetalleVenta[] = [];
        // Search for changes on list
        items.forEach(ndv => {
            const idx = this._detalle.findIndex(dv => ndv.productoVenta.key === dv.productoVenta.key);
            if (idx >= 0) {
                if (this._detalle[idx].hasChanges(ndv)) {
                    this._detalle[idx] = ndv;
                    changes.push(ndv);
                }
            } else {
                this._detalle.push(ndv);
                changes.push(ndv);
            }
        });
        if (!concat) {
            this._detalle = this._detalle.filter(dv => items.findIndex(ndv => ndv.productoVenta.key === dv.productoVenta.key) >= 0);
        }

        this.updateSubTotal();
        if (changes.length > 0) { this.onDetalleChanged.next(changes); }
    }

    private updateSubTotal() {
        if (this.detalle.length > 0) {
            const data = this.detalle
                .map(d => ({ Importe: d.importeNeto, Descuento: d.descuento }))
                .reduce((p, c) => {
                    c.Importe += p.Importe;
                    c.Descuento += p.Descuento;
                    return c;
                });
            this.sumary.subTotal = data.Importe;
            this.sumary.descuento = data.Descuento;
        } else {
            this.sumary.subTotal = 0;
            this.sumary.descuento = 0;
        }
        this.sumary.impuestos = (this.sumary.subTotal - this.sumary.descuento) * .16;
    }
}
