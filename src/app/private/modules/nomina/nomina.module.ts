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
import { NominaRoutingModule } from './routing/nomina-routing.module';
import * as components from './components';
import * as directives from './directives';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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
    NominaRoutingModule,
  ],
  declarations: [
    components.FiniquitoComponent,
    components.ConfrontaDispersionComponent,
    components.ListaEmpleadosComponent,
    components.EmpleadoComponent,
    components.EmpleadoFormComponent,
    components.RelacionLaboralFormComponent,
    directives.ConfirmacionDispersionBanorteDirective
  ]
})
export class NominaModule { }
