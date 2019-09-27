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

import { OSCommonModule } from 'app/common/common.module';
// Routing
import { NominaRoutingModule } from './routing/nomina-routing.module';
import * as components from './components';
import * as directives from './directives';

@NgModule({
  imports: [
    CommonModule,
    NominaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Material
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    OSCommonModule
  ],
  declarations: [
    components.FiniquitoComponent,
    components.ConfrontaDispersionComponent,
    components.EmpleadoComponent,
    components.ListaEmpleadosComponent,
    directives.ConfirmacionDispersionBanorteDirective
  ],
  exports: [ ],
})
export class NominaModule { }
