import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

// Routing
import { NominaRoutingModule } from './routing/nomina-routing.module';
// Containers

// Components
import * as components from './components';

// Shared Components


@NgModule({
  imports: [
    CommonModule,
    NominaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // Material
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [
    components.FiniquitoComponent
  ],
  exports: [
    NominaRoutingModule
  ],
})
export class NominaModule { }
