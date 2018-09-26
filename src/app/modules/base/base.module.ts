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
import { PersonaComponent } from './components/persona/persona.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
// Table
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FilterComponent } from './components/filter/filter.component';
// Services
import { PersonasService } from './services/personas.service';
import { EmpresasService } from './services/empresa.service';

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
    MatSnackBarModule,
  ],
  declarations: [
    PaginatorComponent,
    FilterComponent,
    PersonaComponent,
    MonthYearSelectorComponent,
    DateSelectionComponent,
    EmpresaComponent,
    SelectComponent,
    LoadingComponent,
  ],
  exports: [
    FilterComponent,
    LoadingComponent,
    PersonaComponent,
    EmpresaComponent,
    MonthYearSelectorComponent,
    DateSelectionComponent,
  ],
  providers: [
    PersonasService,
    EmpresasService,
  ]
})
export class BaseModule { }
