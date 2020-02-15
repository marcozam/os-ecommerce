import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Services
// Models
import { Venta } from 'models/ventas';

@Component({
  selector: 'app-ventas-pendientes-entrega',
  templateUrl: './ventas-pendientes-entrega.component.html',
  styleUrls: ['./ventas-pendientes-entrega.component.scss']
})
export class VentasPendientesEntregaComponent implements OnInit {

  sucursalID: number;
  clienteID: number;
  opcion = 'pendientes-entrega';

  lista: Venta[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sucursalID = 1;
    // app-lista-ventas [ventasSource]="listaVentas"
    if (this.router.url.indexOf('crm/historial') >= 0) { this.opcion = 'historial'; }
    const clienteID = this.route.snapshot.params['clienteID'];
    this.clienteID = clienteID ? clienteID : 0;

    if (this.opcion === 'pendientes-entrega') {
      /*
      this.ventaService.getOrdenesPendientesEntrega(this.sucursalID, this.clienteID)
        .subscribe(result => { this.lista = result; });
        */
    } else if (this.opcion === 'historial') {
      /*
      this.ventaService.getHistorialCompras(this.clienteID)
        .subscribe(result => { this.lista = result; });
        */
    }
  }
}
