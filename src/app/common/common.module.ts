import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import {
  MultipleSelectionComponent,
  DialogBoxComponent,
  FormContainerComponent,
  LoadingComponent,
  TableComponent,
} from './components';
// Directives
import {
  FormTitleDirective,
  FormButtonDirective
} from './directives';
// Services
import {
  DialogBoxService,
  OSPaginatorIntl
} from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
  ],
  declarations: [
    // Components
    MultipleSelectionComponent,
    FormContainerComponent,
    LoadingComponent,
    TableComponent,
    DialogBoxComponent,
    // Directives
    FormTitleDirective,
    FormButtonDirective
  ],
  providers: [
    DialogBoxService,
    { provide: MatPaginatorIntl, useClass: OSPaginatorIntl }
  ],
  exports: [
    MultipleSelectionComponent,
    FormContainerComponent,
    TableComponent,
    FormTitleDirective,
    FormButtonDirective,
    // Modules to Export
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Materials
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  entryComponents: [
    DialogBoxComponent
  ]
})
export class OSCommonModule { }
