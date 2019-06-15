import { BaseCatalog } from 'app/common';

import { Sucursal, Status, Persona, Usuario } from '../general';
import { Contacto } from '../crm';

export class VentaSummary extends BaseCatalog {
    cliente: any;
    vendedor: any;
    sucursal?: Sucursal;
    statusInterno?: Status;
    status?: Status;
    subTotal: number;
    descuento = 0;
    totalPagado: number;
    totalRecibido?: number;
    impuestos: number;
    fecha: Date;

    get total(): number { return Math.floor((this.subTotal - this.descuento + this.impuestos) * 100) / 100; }

    get saldo(): number { return this.total - this.totalPagado; }

    constructor() {
        super();
        this.key = 0;
        this.cliente = new Contacto();
        this.cliente.persona = new Persona();
        this.sucursal = new Sucursal('MATRIZ');
        this.vendedor = new Usuario('ROCIO GASTELUM');
        this.subTotal = 0;
        this.impuestos = 0;
        this.totalPagado = 0;
        this.fecha = new Date();
    }
}
