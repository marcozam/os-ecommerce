import { Injectable } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { VentaTicketService } from 'app/modules/venta/services/tickets/venta-ticket.service';
import { Venta } from 'app/modules/venta/models/venta.models';
import { VentaService } from 'app/modules/venta/services/venta.service';

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
