import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from '../components';
import * as resolvers from './resolvers';
import * as productResolvers from 'app/private/modules/producto/routing/resolvers';

const routes: Routes = [
  {
    path: 'movimientos',
    component: components.MovimientosComponent,
    data: { title: 'Movimientos de Inventario' },
    resolve: {
      tiposMovimientoLoaded: resolvers.TipoMovimientoInventarioLoadedResolver,
      categoriasLoaded: productResolvers.CategoriasListResolver,
    },
  },
  {
    path: 'corte',
    component: components.CorteInventarioComponent,
    data: { title: 'Corte de Inventario' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    resolvers.TipoMovimientoInventarioLoadedResolver,
    productResolvers.CategoriasListResolver,
  ],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
