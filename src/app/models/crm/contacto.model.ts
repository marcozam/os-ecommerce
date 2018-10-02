import { OSBaseCatalog } from 'app/shared';
import { Persona, Empresa } from '../general';
import { DatoContacto } from '.';

export class Contacto extends OSBaseCatalog {
    key: number;
    tipoID: number;
    referenceID: number;
    persona?: Persona;
    empresa?: Empresa;
    datos: DatoContacto[];

    public get nombre(): string {
        return this.persona ? this.persona.nombreCompleto.toUpperCase() : this.empresa.nombre.toUpperCase();
    }

    constructor() {
        super();
        this.persona = new Persona();
        this.datos = [];
    }
}
