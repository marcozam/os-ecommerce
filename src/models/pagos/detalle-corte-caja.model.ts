import { MetodoPago } from '../facturacion';

export class DetalleCorteCaja {
  montoRecibido: number;
  metodoPago: MetodoPago;

  get diferencia(): number{
    return this.montoEsperado - this.montoRecibido;
  }

  constructor(public metodoPagoID: number, public montoEsperado: number) {
    this.montoRecibido = 0;
  }
}
