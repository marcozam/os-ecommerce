import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// Components
import {
  BaseFormComponent,
  LoadingComponent
} from './components';
// Directives
import {
  FormTitleDirective,
  FormButtonDirective
} from './directives';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // Material
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    // Components
    BaseFormComponent,
    LoadingComponent,
    // Directives
    FormTitleDirective,
    FormButtonDirective
  ],
  exports: [
    BaseFormComponent,
    FormTitleDirective,
    FormButtonDirective
  ]
})
export class OSModule { }
