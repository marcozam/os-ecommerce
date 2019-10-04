import { NgModule } from '@angular/core';

import { EmpresasService } from './empresa.service';
import { PersonasService } from './personas.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    EmpresasService,
    PersonasService
  ]
})
export class BaseServicesModule { }
