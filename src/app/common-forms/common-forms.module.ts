import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

import * as components from './components';
import * as validators from './validators';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    components.SearchPersonaFormComponent,
    // Validators
    validators.NameValidatorDirective,
  ],
  exports: [
    components.PersonaFormComponent,
    components.EmpresaFormComponent,
    components.SearchPersonaFormComponent,
    // Validators
    validators.NameValidatorDirective,
    // Export Forms
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OSCommonFormsModule { }
