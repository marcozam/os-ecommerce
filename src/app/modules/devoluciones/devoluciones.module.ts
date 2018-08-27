import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevolucionesRoutingModule } from './devoluciones-routing.module';
// Components
import { DevolucionComponent } from './containers';

@NgModule({
  imports: [
    CommonModule,
    DevolucionesRoutingModule,
  ],
  declarations: [
    DevolucionComponent
  ]
})
export class DevolucionesModule { }
