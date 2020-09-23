import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './modules/auth/auth.guard';

// Routes
import { PUBLIC_ROUTES } from './layouts/constants';
// Layouts
import {
    PublicComponent,
    PageNotFoundComponent
} from './layouts/components';

import { SmartHomeComponent } from './oHome/smart-home/smart-home.component';

const appRoutes: Routes = [
    { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
    { path: 'escolar', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
    { path: 'smarthome', component: SmartHomeComponent },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },
    { path: 'secure', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
    { path: '404', component: PageNotFoundComponent, data: { title: ''} },
    { path: '**', redirectTo: '404' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
