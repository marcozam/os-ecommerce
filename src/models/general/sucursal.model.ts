import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class Sucursal extends BaseCatalog {
    @Field('C1') nombre: string;

    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
