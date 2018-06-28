import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    // Material
    MatProgressBarModule,
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedComponetsModule { }
