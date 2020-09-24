import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
// Common
import { OSCommonFormsModule } from 'app/common-forms/common-forms.module';
// Routing
import { SchoolRoutingModule } from './school-routing.module';

// import { DocumentsRoutingModule } from './routing/documents-routing.module';
// Componets
import * as forms from './forms';
import * as components from './components';
import * as layouts from './layouts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDatepickerModule,
    // Common
    OSCommonFormsModule,
    // Routing
    SchoolRoutingModule,
  ],
  declarations: [
    forms.CicloEscolarFormComponent,
    forms.PlantelFormComponent,
    forms.EscuelaFormComponent,
    forms.GrupoFormComponent,
    forms.EstudianteFormComponent,
    components.InscripcionComponent,
    layouts.SchoolLayoutComponent,
  ],
})
export class SchoolModule { }
