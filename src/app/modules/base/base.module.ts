import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Components
// Common
import { MonthYearSelectorComponent } from './components/month-year-selector/month-year-selector.component';
import { DateSelectionComponent } from './components/date-selection/date-selection.component';
import { SelectComponent } from './components/select/select.component';
import { LoadingComponent } from './components/loading/loading.component';
// Basic Catalogs
// Table
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  declarations: [
    PaginatorComponent,
    FilterComponent,
    MonthYearSelectorComponent,
    DateSelectionComponent,
    SelectComponent,
    LoadingComponent,
  ],
  exports: [
    FilterComponent,
    LoadingComponent,
    MonthYearSelectorComponent,
    DateSelectionComponent,
  ],
  providers: [ ]
})
export class BaseModule { }
