import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class MetodoPago extends BaseCatalog {
    @Field('C1', 30401) nombre: string;
    @Field('C2', 30402) enVenta: boolean;
    @Field('C3', 30503) enCorte: boolean;
    @Field('C4', 30404) utilizaReferencia: boolean;
    codigo: string;

    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
