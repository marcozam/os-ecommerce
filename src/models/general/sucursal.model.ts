import { BaseCatalog, Field } from 'app/common';

export class Sucursal extends BaseCatalog {
    @Field('C1') nombre: string;

    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
