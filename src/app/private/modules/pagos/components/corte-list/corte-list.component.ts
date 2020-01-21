import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DecimalPipe, DatePipe } from '@angular/common';
// Services
import { CajaService } from 'services/http/pagos';
import { CorteTicketService } from '../../services/corte-ticket.service';
// Commmon
import { OSTableColumn, OSListComponent } from 'app/common';
// Models
import { CorteCaja, DetalleCorteCaja } from 'models/pagos';

@Component({
  selector: 'app-corte-list',
  templateUrl: './corte-list.component.html',
  styleUrls: ['./corte-list.component.scss'],
  providers: [ CajaService, CorteTicketService, DecimalPipe, DatePipe ]
})
export class CorteListComponent extends OSListComponent<CorteCaja> implements OnInit {
  // Defines Columns
  tableColumns = [
    new OSTableColumn('id', 'Folio', item => item.key),
    new OSTableColumn('fecha', 'Fecha', item => this._date.transform(item.fechaCorte, 'dd MMM yyyy HH:mm')),
    new OSTableColumn('usuario', 'Cajero', item => item.usuario.nombre),
    new OSTableColumn('sucursal', 'Sucursal', item => item.sucursal.nombre),
    new OSTableColumn('diferencia', 'Diferencia Total', item => `$ ${this._decimal.transform(item.diferencia, '1.2-2')}`) // , true, item => item.diferencia
  ];
  /*
  detailsDataSource: TableSource<DetalleCorteCaja>;
  this.detailsDataSource.columns = [
    new OSTableColumn('Metodo de Pago', 'metodoPago', item => item.metodoPago.nombre),
    new OSTableColumn('Esperado', 'esperado', item => `$ ${this._decimal.transform(item.montoEsperado, '1.2-2')}`, true, item => item.montoEsperado),
    new OSTableColumn('Recibido', 'recibido', item => `$ ${this._decimal.transform(item.montoRecibido, '1.2-2')}`, true, item => item.montoRecibido),
    new OSTableColumn('Diferencia', 'diferencia', item => `$ ${this._decimal.transform(item.diferencia, '1.2-2')}`, true, item => item.diferencia),
  ];
  */

  constructor(
    router: Router,
    route: ActivatedRoute,
    private _service: CajaService,
    private _ticket: CorteTicketService,
    private _decimal: DecimalPipe,
    private _date: DatePipe) {
    super(router, route);
  }

  selectedCorte: CorteCaja;
  showDetails = false;
  showMovimeintos = false;
  loadingDetail = false;
  sucursalID: number;

  ngOnInit() {
    this.sucursalID = 1;
    this.list$ = this._service.getCortes(this.sucursalID);
    super.ngOnInit();
  }

  printTicket(item: CorteCaja) {
    this._ticket.corte = item;
    this._service.getDetalleCorte(Number(item.key))
        .subscribe(result => {
          item.detalle = result;
          this._ticket.print();
        });
  }

  mostarDetalle(item: CorteCaja) {
    this.selectedCorte = item;
    this.showDetails = true;
    if (item.detalle.length > 0) {
      // this.detailsDataSource.updateDataSource(item.detalle);
    } else {
      this.loadingDetail = true;
      this._service.getDetalleCorte(Number(item.key))
        .subscribe(result => {
          item.detalle = result;
          // this.detailsDataSource.updateDataSource(result);
          this.loadingDetail = false;
        });
    }
  }

  mostarMovimientos(item: CorteCaja) {
    this.selectedCorte = item;
    this.showDetails = false;
    this.showMovimeintos = true;
  }
}
