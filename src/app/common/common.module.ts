import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import {
  MatProgressBarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatPaginatorIntl,
} from '@angular/material';

// Components
import {
  MultipleSelectionComponent,
  DialogBoxComponent,
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
    MatDialogModule
  ],
  declarations: [
    // Components
    MultipleSelectionComponent,
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
    MultipleSelectionComponent,
    BaseFormComponent,
    TableComponent,
    FormTitleDirective,
    FormButtonDirective
  ]
})
export class OSCommonModule { }
