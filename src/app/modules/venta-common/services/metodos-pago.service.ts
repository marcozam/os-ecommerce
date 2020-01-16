import { Injectable } from '@angular/core';
// Services
import { BaseGenericCatalogService, GenericCatalogService } from 'services/http/generic-catalogs';
// Models
import { MetodoPago } from 'models/facturacion';

@Injectable()
export class MetodosPagoService extends BaseGenericCatalogService<MetodoPago> {

  constructor(_db: GenericCatalogService) {
    super(_db, 304);
    this.autoSort = false;
  }

  newInstance(): MetodoPago { return new MetodoPago(); }
}
