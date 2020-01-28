import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
// OS Modules
import { OSCommonModule } from 'app/common/common.module';
import { OSCommonFormsModule } from 'app/common-forms/common-forms.module';
// Routing
import { EscolarRoutingModule } from './routing/escolar-routing.module';
import * as containers from './containers';
import * as components from './components';

@NgModule({
  imports: [
    // Material
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    // OS Modules
    OSCommonModule,
    OSCommonFormsModule,
    // Routing
    EscolarRoutingModule,
  ],
  declarations: [
    containers.TutorComponent,
    containers.AlumnoComponent,
    containers.FamiliaComponent,
    components.TutorFormComponent,
    components.AlumnoFormComponent,
  ]
})
export class EscolarModule { }
