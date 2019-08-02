// Ng
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Layouts
import { SecureLayoutComponent } from './layouts';

const privateRoutes: Routes = [
    { path: '', component: SecureLayoutComponent, children: [
        { path: 'productos', loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule) },
        { path: 'nominas', loadChildren: () => import('./modules/nomina/nomina.module').then(m => m.NominaModule) }
    ]},
];

export const PrivateRoutingModule: ModuleWithProviders = RouterModule.forChild(privateRoutes);
