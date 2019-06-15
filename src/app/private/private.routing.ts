import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { SecureLayoutComponent } from './layouts';

const privateRoutes: Routes = [
    { path: '', component: SecureLayoutComponent, children: [
        { path: 'productos', loadChildren: './modules/producto/producto.module#ProductoModule' },
    ]},
];

export const PrivateRoutingModule: ModuleWithProviders = RouterModule.forChild(privateRoutes);
