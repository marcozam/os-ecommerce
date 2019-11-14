import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { Persona, Empresa } from '../general';
import { RelacionLaboral } from './relacion-laboral.model';

export interface IEmpleadoForm {
    Nombre: string;
    NoEmpleado: number;
    keyPatron: number;
}

export class Empleado extends BaseCatalog {
    private _datosPersonales: Persona;
    // TODO: Remove this props
    private _patron: Empresa;
    patronId: number;

    @Field('C1') personaId: number;
    @Field('C2') NSS: string;
    relacionesLaborales: RelacionLaboral[] = [];

    get datosPersonales() { return this._datosPersonales; }
    set datosPersonales(value: Persona) {
        this._datosPersonales = value;
        this.personaId = value ? value.key : 0;
    }

    // TODO: Remove
    get patron() { return this._patron; }
    set patron(value: Empresa) {
        this._patron = value;
        this.patronId = value ? value.key : 0;
    }

    constructor(datosPersonales?: Persona, key = 0, patron?: Empresa) {
        super(key);
        this.datosPersonales = datosPersonales;
        // TODO: Remove
        if (patron) {
          this.patron = patron;
        }
    }
}
