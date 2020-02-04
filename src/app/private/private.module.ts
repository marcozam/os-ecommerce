// Ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  SecureLayoutComponent,
  SucursalSelectionComponent,
} from './layouts';
import { PrivateRoutingModule } from './routing/private.routing';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    // Angular Material
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
  ],
  declarations: [
    SecureLayoutComponent,
    SucursalSelectionComponent,
  ],
  entryComponents: [
    SucursalSelectionComponent,
  ]
})
export class PrivateModule { }
