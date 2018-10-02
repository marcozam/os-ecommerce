import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import {
  MatButtonModule,
  MatIconModule,
  MatRadioModule
} from '@angular/material';
// Routing
import { EcommerceRoutingModule } from './ecommerce-routing.module';
// Componets
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
  ],
  declarations: [HomeComponent]
})
export class EcommerceModule { }
