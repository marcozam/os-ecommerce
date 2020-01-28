import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { Persona } from '../general';

export class Alumno extends BaseCatalog {
    private _datosPersonales: Persona;

    @Field('C1') personaId: number;
    @Field('C2') Matricula: string;

    get datosPersonales() { return this._datosPersonales; }
    set datosPersonales(value: Persona) {
        this._datosPersonales = value;
        this.personaId = value ? value.key : 0;
    }

    constructor(datosPersonales?: Persona, key = 0) {
        super(key);
        this.datosPersonales = datosPersonales;
    }
}
