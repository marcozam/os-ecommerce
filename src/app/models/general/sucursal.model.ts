import { Field } from 'app/helpers/decorators';

import { BaseCatalog } from '../base';

export class Sucursal extends BaseCatalog {
    @Field('C1') nombre: string;

    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
