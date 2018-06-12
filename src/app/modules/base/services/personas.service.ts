import { Injectable } from '@angular/core';
import { getFields } from 'app/modules/generic-catalogs/decorator/dynamic-catalog.decorator';
// Server Data Handling
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';
import { GenericService, GenericServiceBase } from 'app/modules/generic-catalogs/services/generic.service';
// Models
import { Persona } from 'app/modules/base/models/base.models';

@Injectable()
export class PersonasService extends GenericService<Persona> implements GenericServiceBase<Persona> {

    constructor(_db: BaseAjaxService) {
        super(_db);
        this.catalogID = 1;
    }

    map2Server(value: Persona) {
        const fieldsMD = getFields(value);
        return fieldsMD.map(fld => {
            // TODO
            if (fld.propertyName === 'fechaNacimiento') {
                return `${fld.key},${value[fld.propertyName].toJSON()}`;
            } else {
                return `${fld.key},${value[fld.propertyName]}`;
            }
        }).join('~');
    }

    newInstance() { return new Persona(); }
}
