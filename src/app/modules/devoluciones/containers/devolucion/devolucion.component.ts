import { Component, OnInit } from '@angular/core';
import { VentaService } from 'services/venta';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.scss'],
  providers: [ VentaService]
})
export class DevolucionComponent implements OnInit {

  constructor(private ventaService: VentaService) {
    ventaService.getByID(1).subscribe((venta) => {
      console.log(venta);
    });
  }

  ngOnInit() {
  }

}
