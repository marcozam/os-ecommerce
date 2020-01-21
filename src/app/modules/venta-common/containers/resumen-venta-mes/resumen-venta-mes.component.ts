import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';
// Services
import { VentasReportingService } from '../../services/ventas-reporting.service';
// Models
import { Venta } from 'models/ventas';
import { ResumenVenta, Ingresos } from '../../models/ventas-reporting.models';
import { OSTableColumn, OSListComponent } from 'app/common';

@Component({
  selector: 'app-resumen-venta-mes',
  templateUrl: './resumen-venta-mes.component.html',
  styleUrls: ['./resumen-venta-mes.component.scss'],
  providers: [VentasReportingService, DecimalPipe]
})
export class ResumenVentaMesComponent extends OSListComponent<any> implements OnInit {

  selectedMonth: number;
  selectedYear: number;
  sucursalID: number;
  resumen: ResumenVenta;

  listaVentas: Venta[];

  constructor(
    router: Router,
    route: ActivatedRoute,
    private _ventaReporting: VentasReportingService,
    private _decimal: DecimalPipe) {
    super(router, route);
    // Defines Columns
    /*
    this.dsIngresos.columns = {
      'formaPago': new TableColumn('Forma Pago', 'formaPago', item => item.metodPago.nombre),
      'monto': new TableColumn('Monto', 'monto', item => `$ ${this._decimal.transform(item.monto, '1.2-2')}`, true, item => item.monto),
    };
    this.dsOftalmologos.columns = {
      'oftalmologo': new TableColumn('Oftalmologo', 'oftalmologo', item => item.nombre),
      'noExamenes': new TableColumn('No Examenes', 'noExamenes', item => item.noExamenes),
    };
    this.dsLentes.columns = {
      'armazon': new TableColumn('Armazon', 'armazon', item => item.armazon),
      'noVentas': new TableColumn('No Ventas', 'noVentas', item => item.noVentas),
    };
    */
   }

  ngOnInit() { this.sucursalID = 1; }

  getResume() {
    this._ventaReporting.getResumenMensual(this.selectedMonth, this.selectedYear, this.sucursalID)
      .subscribe((data) => {
        this.resumen = data;
        this.listaVentas = data.lista;
        // this.dsIngresos.updateDataSource(data.ingresos);
      });
  }
}
