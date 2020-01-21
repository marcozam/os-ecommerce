import { Venta } from 'models/ventas';
import { MetodoPago } from 'models/facturacion';

export interface Ingresos {
  metodPago: MetodoPago;
  monto: number;
}

export interface ResumenVenta {
    totalVenta: number;
    noVentas: number;
    totalPagado: number;

    ingresos: Ingresos[];
    lista: Venta[];
}
