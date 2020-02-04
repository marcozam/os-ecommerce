import { Injectable } from '@angular/core';

import { Sucursal } from 'models/general';
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';

@Injectable()
export class SucursalesService extends BaseGenericCatalogService<Sucursal> {
    constructor(_db: GenericCatalogService) { super(_db, 99); }

    newInstance() { return new Sucursal(); }
}
