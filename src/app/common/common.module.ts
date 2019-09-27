import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

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
// Services
import {
  DialogBoxService,
  OSPaginatorIntl
} from './services';

import { PersonaFormComponent } from './forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // Material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  declarations: [
    // Components
    MultipleSelectionComponent,
    BaseFormComponent,
    LoadingComponent,
    TableComponent,
    DialogBoxComponent,
    // Forms
    PersonaFormComponent,
    // Directives
    FormTitleDirective,
    FormButtonDirective
  ],
  providers: [
    DialogBoxService,
    { provide: MatPaginatorIntl, useClass: OSPaginatorIntl }
  ],
  exports: [
    PersonaFormComponent,
    MultipleSelectionComponent,
    BaseFormComponent,
    TableComponent,
    FormTitleDirective,
    FormButtonDirective
  ],
  entryComponents: [
    DialogBoxComponent
  ]
})
export class OSCommonModule { }
