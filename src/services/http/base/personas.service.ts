import { Injectable } from '@angular/core';
import { getFields } from 'core/decorators';
// Server Data Handling
// Models
import { Persona } from 'models/general';
import { BaseGenericCatalogService, GenericCatalogService } from '../generic-catalogs';

@Injectable()
export class PersonasService extends BaseGenericCatalogService<Persona> {
    constructor(_db: GenericCatalogService) { super(_db, 1); }

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
