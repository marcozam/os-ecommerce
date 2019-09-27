import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { Persona, Empresa } from '../general';

export interface Empleados {
    key: number;
    Nombre: string;
    NoEmpleado: number;
    keyPatron: number;
}

export class Empleado extends BaseCatalog {
    private _datosPersonales: Persona;
    private _patron: Empresa;

    @Field('C1') noEmpleado: number;
    @Field('C2') personaId: number;
    @Field('C3') patronId: number;

    get datosPersonales() { return this._datosPersonales; }
    set datosPersonales(value: Persona) {
        this._datosPersonales = value;
        this.personaId = value ? value.key : 0;
    }

    get patron() { return this._patron; }
    set patron(value: Empresa) {
        this._patron = value;
        this.patronId = value ? value.key : 0;
    }

    constructor(datosPersonales: Persona, noEmpleado: number, key = 0, patron?: Empresa) {
        super(key);
        this.noEmpleado = noEmpleado;
        this.datosPersonales = datosPersonales;
        if (patron) {
          this.patron = patron;
        }
    }
}
