import { Injectable } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { VentaTicketService } from './venta-ticket.service';
import { Venta } from 'models/ventas';
import { VentaService } from 'services/http/venta';

@Injectable()
export class VentaOptikaTicketService extends VentaTicketService {

  corteID: number;
  esPagoInicial = true;
  esPresupuesto = false;
  venta: Venta;

  constructor(
    service: VentaService,
    _decimal: DecimalPipe,
    _date: DatePipe) {
    super(service, _decimal, _date);
  }

  getServerData(key: number) {
    this.service.getByID(key)
      .subscribe((data: Venta) => {
        this.venta = data;
        this.print();
      });
  }
}
