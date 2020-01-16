import { BaseCatalog } from 'models';
import { Contacto } from 'models/crm';
import { Usuario, Sucursal, Persona, Status } from 'models/general';

export class SumaryVenta extends BaseCatalog {
    cliente: Contacto;
    vendedor: Usuario;
    sucursal?: Sucursal;
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
        this.sucursal = new Sucursal();
        this.sucursal.nombre = 'MATRIZ';
        this.vendedor = new Usuario();
        this.vendedor.nombre = 'ROCIO GASTELUM';
        this.subTotal = 0;
        this.impuestos = 0;
        this.totalPagado = 0;
        this.fecha = new Date();
    }
}
