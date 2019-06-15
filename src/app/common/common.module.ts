import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';

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
