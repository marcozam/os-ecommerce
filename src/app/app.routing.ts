import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './modules/auth/auth.guard';

// Routes
import { SECURE_ROUTES } from './layouts/secure/secure.routing';
import { PUBLIC_ROUTES } from './layouts/public/public.routing';
// Layouts
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
// Components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    // { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent, children: SECURE_ROUTES },
    { path: '404', component: PageNotFoundComponent, data: { title: ''} },
    { path: '**', component: PageNotFoundComponent, data: { title: ''} }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
