import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Resolvers

// Containers

// Components
import * as components from '../components';
import { NOMINAS_ROUTE_STATE_PARAMS } from './constants';

const routes: Routes = [
  { path: 'empleados', component: components.ListaEmpleadosComponent },
  { path: `empleados/:${NOMINAS_ROUTE_STATE_PARAMS.EMPLEADO_ID}`, component: components.EmpleadoComponent },
  { path: 'finiquito', component: components.FiniquitoComponent },
  { path: 'dispersion', component: components.ConfrontaDispersionComponent },
  { path: '', redirectTo: 'finiquito', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class NominaRoutingModule { }
