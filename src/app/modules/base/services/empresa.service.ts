import { Injectable } from '@angular/core';

import { GenericService, GenericServiceBase } from 'app/modules/generic-catalogs/services/generic.service';

import { Empresa } from 'app/modules/base/models/base.models';
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';

@Injectable()
export class EmpresasService extends GenericService<Empresa> implements GenericServiceBase<Empresa> {
    constructor(_db: BaseAjaxService) {
        super(_db);
        this.catalogID = 2;
    }
}
