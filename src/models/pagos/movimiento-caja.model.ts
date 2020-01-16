import { BaseCatalog } from '../base-catalog.model';
import { MetodoPago } from '../facturacion';

export class MovimientoCaja extends BaseCatalog {
    ordenVentaID: number;
    nombreCliente: string;
    fecha: Date;
    monto: number;
    totalVenta: number;
    esPagoInicial: boolean;
    nombreUsuario: string;
    corteID: number;

    metodoPago: MetodoPago;
}
