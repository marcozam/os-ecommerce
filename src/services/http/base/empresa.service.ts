import { Injectable } from '@angular/core';

import { Empresa } from 'models/general';
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';

@Injectable()
export class EmpresasService extends BaseGenericCatalogService<Empresa> {
    constructor(_db: GenericCatalogService) { super(_db, 2); }

    newInstance() { return new Empresa(0, ''); }
}
