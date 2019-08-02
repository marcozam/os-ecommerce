import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './modules/auth/auth.guard';

// Routes
import { PUBLIC_ROUTES } from './layouts/constants';
// Layouts
import {
    PublicComponent,
} from './layouts/components';
// Components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
    { path: 'secure', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
    { path: '404', component: PageNotFoundComponent, data: { title: ''} },
    { path: '**', component: PageNotFoundComponent, data: { title: ''} }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
