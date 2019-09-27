import { Injectable } from '@angular/core';
// Models
import { DatoContacto } from 'app/modules/crm/models/crm.models';
// Services
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';
import { GenericServiceBase, GenericService } from 'services/http/generic-catalogs/generic.service';

@Injectable()
export class DatosContactoService extends GenericService<DatoContacto> implements GenericServiceBase<DatoContacto> {

    constructor(_db: BaseAjaxService) {
        super(_db);
        this.catalogID = 502;
    }

    newInstance() { return new DatoContacto(); }
}
