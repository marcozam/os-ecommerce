import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { CajaService } from 'services/http/pagos';
import { VentaOptikaTicketService } from 'app/modules/venta/services/tickets/venta-optika-ticket.service';
// Common
import { DialogBoxService } from 'app/common/services';
import { OSTableColumn, OSListComponent } from 'app/common';
// Models
import { MovimientoCaja } from 'models/pagos';

import { WARNING_TITLE, SUCCESS_TITLE } from 'app/notifications';

@Component({
  selector: 'app-movimientos-caja',
  templateUrl: './movimientos-caja.component.html',
  styleUrls: ['./movimientos-caja.component.scss'],
  providers: [DecimalPipe, DatePipe, VentaOptikaTicketService, CajaService]
})
export class MovimientosCajaComponent extends OSListComponent<MovimientoCaja> implements OnInit {

  tableColumns = [
    new OSTableColumn('orden', 'Orden', item => item.ordenVentaID),
    new OSTableColumn('fecha', 'Fecha', item => this._date.transform(item.fecha, 'dd MMM yyyy HH:mm')),
    new OSTableColumn('movimiento', 'Movimiento', item => item.esPagoInicial ? item.totalVenta === item.monto ? 'Venta' : 'Anticipo' : 'Abono'),
    new OSTableColumn('metodoPago', 'Metodo de Pago', item => item.metodoPago.nombre),
    new OSTableColumn('cliente', 'Cliente', item => item.nombreCliente),
    new OSTableColumn('usuario', 'Lo Atendio', item => item.nombreUsuario),
    new OSTableColumn('monto', 'Monto', item => `$ ${this._decimal.transform(item.monto, '1.2-2')}`), // , true, item => item.monto
  ];

  @Input() corteID: number;
  @Input() sucursalID: number;

  constructor(
    router: Router,
    route: ActivatedRoute,
    private _service: CajaService,
    private _printVentaService: VentaOptikaTicketService,
    private _dialog: DialogBoxService,
    private _decimal: DecimalPipe,
    private _date: DatePipe) {
    super(router, route);
  }

  ngOnInit() {
    this.list$ = this._service.getMovimientosCorte(this.sucursalID, this.corteID);
    super.ngOnInit();
  }

  onPrintTicket(ordenVentaID: number, esPagoInicial: boolean) {
    this._printVentaService.esPagoInicial = esPagoInicial;
    this._printVentaService.corteID = 0;
    this._printVentaService.getServerData(ordenVentaID);
  }

  onCancel(item: MovimientoCaja) {
    // Send warning
    this._dialog.openDialog(
      WARNING_TITLE,
      `Esta seguro que desea eliminar. el movimiento de la orden ${item.ordenVentaID}. Por un monto de ${item.monto}`,
      {
        showButtons: true,
        onClose: (r) => {
          if (r) {
            this._service.deleteMovimientoCaja(item)
              .subscribe(() => {
                this._dialog.openDialog(SUCCESS_TITLE, 'El movimiento ha sido eliminado con exito');
              });
          }
        }
      });
  }
}
