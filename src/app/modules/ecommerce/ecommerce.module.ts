import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
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
