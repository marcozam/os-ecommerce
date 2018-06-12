import { Component, OnInit } from '@angular/core';
import { VentasReportingService } from '../../services/ventas-reporting.service';
import { ResumenVenta, Ingresos } from '../../models/ventas-reporting.models';
import { TableSource, TableColumn } from 'app/modules/base/models/data-source.models';
import { DecimalPipe } from '@angular/common';
import { Venta } from '../../../venta/models/venta.models';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-resumen-venta-mes',
  templateUrl: './resumen-venta-mes.component.html',
  styleUrls: ['./resumen-venta-mes.component.scss'],
  providers: [VentasReportingService, DecimalPipe]
})
export class ResumenVentaMesComponent implements OnInit {

  selectedMonth: number;
  selectedYear: number;
  sucursalID: number;
  resumen: ResumenVenta;

  listaVentas: Venta[];
  dsIngresos: TableSource<Ingresos>;
  dsOftalmologos: TableSource<any>;
  dsLentes: TableSource<any>;

  constructor(
    private _ventaReporting: VentasReportingService,
    private _decimal: DecimalPipe) {
    this.dsIngresos = new TableSource(of(null));
    this.dsOftalmologos = new TableSource(of(null));
     this.dsLentes = new TableSource(of(null));
    // Defines Columns
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
