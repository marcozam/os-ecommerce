import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import * as components from '../common-forms/components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  declarations: [
    // Components
    components.PersonaFormComponent,
    components.EmpresaFormComponent,
  ],
  exports: [
    components.PersonaFormComponent,
    components.EmpresaFormComponent,
    // Export Forms
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class OSCommonFormsModule { }
