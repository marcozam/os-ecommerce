import { NgModule } from '@angular/core';

import { EmpresasService } from './empresa.service';
import { PersonasService } from './personas.service';
import { SucursalesService } from './sucursales.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    EmpresasService,
    PersonasService,
    SucursalesService,
  ]
})
export class BaseServicesModule { }
