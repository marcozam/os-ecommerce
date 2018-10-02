import { Subject } from 'rxjs';

// Models
// Persona, Status
import { GenericCatalog, IBaseCatalog } from 'app/common';
import { Producto } from 'app/models/productos/producto.models';
import { Contacto } from 'app/modules/crm/models/crm.models';
import { Sucursal } from 'app/modules/generic-catalogs/models/generic-catalogs.models';

import { Field } from 'app/modules/generic-catalogs/decorator/dynamic-catalog.decorator';

export class Venta {
    private _detalle: DetalleVenta[] = [];

    get detalle(): DetalleVenta[] { return this._detalle; }

    pagos: DetallePagos[];
    comentarios: ComentariosVenta[];
    sumary: SumaryVenta;

    // used to validate products stock
    onDetalleChanged: Subject<DetalleVenta[]> = new Subject();

    constructor() {
        this.pagos = new Array<DetallePagos>();
        this.comentarios = new Array<ComentariosVenta>();
        this.sumary = new SumaryVenta();
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

export class Usuario extends GenericCatalog { }





export class ComentariosVenta {
    key: number;
    productoID: number;
    // use to group products
    moduleID = 1;

    constructor(public comentario: string) { }
}


// MOVE SOMEWHERE ELSE
export class MetodoPago extends BaseGenericCatalog {
    @Field('C1', 30401) nombre: string;
    @Field('C2', 30402) enVenta: boolean;
    @Field('C3', 30503) enCorte: boolean;
    @Field('C4', 30404) utilizaReferencia: boolean;
    codigo: string;

    constructor(nombre?: string) {
        super();
        this.nombre = nombre ? nombre : '';
    }
}
