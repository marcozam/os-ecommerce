import { MetodoPago } from 'models/facturacion';

export class DetallePagos {
  fecha: Date;
  esPagoInicial: boolean;
  corteID: number;
  monto: number;
  totalRecibido: number;
  metodoPago: MetodoPago;
  key: number;
}
