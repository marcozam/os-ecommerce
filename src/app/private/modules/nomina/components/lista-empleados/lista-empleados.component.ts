import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Empleado } from 'models';
import { OSListComponent, OSTableColumn } from 'app/common';

// Mock Data
import { _listaEmpleadosMock } from 'mocks/nominas';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent extends OSListComponent<Empleado> {
  tableColumns = [
    new OSTableColumn('nombre', 'Nombre Completo', (item: Empleado) => item.datosPersonales.nombreCompleto),
    new OSTableColumn('patron', 'Patron', (item: Empleado) => item.patron ? item.patron.nombre : 'Sin Registro' )
  ];

  constructor() {
    super(of(_listaEmpleadosMock));
  }
}
