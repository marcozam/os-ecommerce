import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';

// Components
import {
  BaseFormComponent,
  LoadingComponent,
  TableComponent,
} from './components';
// Directives
import {
  FormTitleDirective,
  FormButtonDirective
} from './directives';
import { OSPaginatorIntl } from './services/os-paginator';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // Material
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    // Components
    BaseFormComponent,
    LoadingComponent,
    TableComponent,
    // Directives
    FormTitleDirective,
    FormButtonDirective
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: OSPaginatorIntl }
  ],
  exports: [
    BaseFormComponent,
    TableComponent,
    FormTitleDirective,
    FormButtonDirective
  ]
})
export class OSModule { }
