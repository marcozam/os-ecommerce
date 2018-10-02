import { Routes } from '@angular/router';
// import { AuthGuard } from '../../modules/auth/auth.guard';

export const SECURE_ROUTES: Routes = [
    // { path: '', redirectTo: 'crm/search', pathMatch: 'full' },
    // Core
    { path: 'productos', loadChildren: 'app/producto/producto.module#ProductoModule' },
    // { path: 'inventario', loadChildren: 'app/modules/inventario/inventario.module#InventarioModule' },
    // { path: 'ventas', loadChildren: 'app/modules/venta/venta.module#VentaModule' },
    // { path: 'devolucion', loadChildren: 'app/modules/devoluciones/devoluciones.module#DevolucionesModule' },
    // { path: 'crm', loadChildren: 'app/modules/crm/crm.module#CRMModule' },
    // { path: 'caja', loadChildren: 'app/modules/pagos/pagos.module#PagosModule' },
    // Auth
    // { path: 'auth', loadChildren: 'app/modules/auth/auth.module#AuthModule' },
    // Reporting
    // { path: 'reporting/ventas', loadChildren: 'app/modules/venta-common/venta-common.module#VentaCommonModule' },
    // Base
    // { path: 'DCG', loadChildren: 'app/modules/generic-catalogs/generic-catalogs.module#GenericCatalogsModule', canActivate: [AuthGuard] },
    // BackOffice
    // { path: 'development', loadChildren: 'app/modules/development/development.module#DevelopmentModule', canActivate: [AuthGuard] }
];
