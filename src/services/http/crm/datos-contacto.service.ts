import { Injectable } from '@angular/core';
// Services
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';
// Models
import { DatoContacto } from 'models/crm';

@Injectable()
export class DatosContactoService extends BaseGenericCatalogService<DatoContacto> {

  constructor(_db: GenericCatalogService) {
    super(_db, 502);
  }

  newInstance() { return new DatoContacto(); }
}
