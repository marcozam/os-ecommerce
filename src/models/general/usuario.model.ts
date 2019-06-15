import { BaseCatalog } from 'app/common';

export class Usuario extends BaseCatalog {
    nombre: string;
    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
