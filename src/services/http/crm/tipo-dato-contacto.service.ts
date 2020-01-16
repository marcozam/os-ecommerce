import { Injectable } from '@angular/core';
// Services
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';
// Models
import { TipoDatosContacto } from 'models/crm';

@Injectable()
export class TipoDatoContactoService  extends BaseGenericCatalogService<TipoDatosContacto> {

  constructor(_db: GenericCatalogService) {
    super(_db, 501);
  }

  newInstance() { return new TipoDatosContacto(); }
}
