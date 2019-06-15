import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { PublicComponent } from './components';
import * as services from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        // Angular Material
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        PublicComponent
    ],
    providers: [
        services.LayoutService
    ]
})
export class LayoutsModule { }

