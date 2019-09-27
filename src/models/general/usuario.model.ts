// import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';

export class Usuario extends BaseCatalog {
    nombre: string;
    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
