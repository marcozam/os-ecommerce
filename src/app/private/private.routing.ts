// Ng
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Core
import { AuthGuard } from 'app/core/guards';
// Layouts
import { SecureLayoutComponent } from './layouts';

const privateRoutes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: 'productos', loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule) },
      { path: 'nominas', loadChildren: () => import('./modules/nomina/nomina.module').then(m => m.NominaModule) },
      { path: 'crm', loadChildren: () => import('./modules/crm/crm.module').then(m => m.CRMModule) },
      { path: 'escolar', loadChildren: () => import('./modules/escolar/escolar.module').then(m => m.EscolarModule) },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  providers: [
    AuthGuard,
  ],
  exports: [
    RouterModule,
  ]
})
export class PrivateRoutingModule { }
