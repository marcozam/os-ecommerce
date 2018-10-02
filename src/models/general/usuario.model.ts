import { BaseCatalog } from '../base';

export class Usuario extends BaseCatalog {
    nombre: string;
    constructor(nombre: string = '') {
        super();
        this.nombre = nombre;
    }
}
