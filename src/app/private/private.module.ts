// Ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { SecureLayoutComponent } from './layouts';
import { PrivateRoutingModule } from './private.routing';

@NgModule({
    imports: [
        CommonModule,
        PrivateRoutingModule,
        // Angular Material
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        SecureLayoutComponent
    ],
})
export class PrivateModule { }
