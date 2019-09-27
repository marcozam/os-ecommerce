import { Injectable } from '@angular/core';
// Models
import { TipoDatosContacto } from 'app/modules/crm/models/crm.models';
// Services
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';
import { GenericServiceBase, GenericService } from 'services/http/generic-catalogs/generic.service';

@Injectable()
export class TipoDatoContactoService extends GenericService<TipoDatosContacto> implements GenericServiceBase<TipoDatosContacto> {

    constructor(_db: BaseAjaxService) {
        super(_db);
        this.catalogID = 501;
    }

    newInstance() { return new TipoDatosContacto(); }
}
