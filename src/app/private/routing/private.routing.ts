// Ng
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Core
import { AuthGuard } from 'app/core/guards';
// Layouts
import { SecureLayoutComponent } from '../layouts';
import { SucursalesLoadedResolver } from './resolvers';

const privateRoutes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    canActivate: [ AuthGuard ],
    resolve: [ SucursalesLoadedResolver ],
    children: [
      { path: 'inventarios', loadChildren: () => import('../modules/inventario/inventario.module').then(m => m.InventarioModule) },
      { path: 'productos', loadChildren: () => import('../modules/producto/producto.module').then(m => m.ProductoModule) },
      { path: 'escolar', loadChildren: () => import('../modules/escolar/escolar.module').then(m => m.EscolarModule) },
      { path: 'nominas', loadChildren: () => import('../modules/nomina/nomina.module').then(m => m.NominaModule) },
      // { path: 'optika', loadChildren: () => import('../modules/optica/optica.module').then(m => m.OpticaModule) },
      { path: 'crm', loadChildren: () => import('../modules/crm/crm.module').then(m => m.CRMModule) },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  providers: [
    AuthGuard,
    SucursalesLoadedResolver,
  ],
  exports: [
    RouterModule,
  ]
})
export class PrivateRoutingModule { }
