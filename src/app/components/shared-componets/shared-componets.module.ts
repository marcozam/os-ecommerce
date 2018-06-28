import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// Base Components
import { LoadingComponent } from './loading/loading.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { MultipleSelectionComponent } from './multiple-selection/multiple-selection.component';

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
    LoadingComponent,
    BaseFormComponent,
    MultipleSelectionComponent,
  ],
  exports: [
    LoadingComponent,
    BaseFormComponent,
    MultipleSelectionComponent,
  ]
})
export class SharedComponetsModule { }
