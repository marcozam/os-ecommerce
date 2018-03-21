import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
    // Core
    { path: '', pathMatch: 'full', redirectTo: 'store/home' },
    { path: 'store', loadChildren: 'app/modules/ecommerce/ecommerce.module#EcommerceModule' },
];
