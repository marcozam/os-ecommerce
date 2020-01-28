import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { Persona } from '../general';

export class User extends BaseCatalog {

    userName: string;
    datosPersonales: Persona;

    constructor(key: number, _userName: string, _datosPersonales?: Persona) {
        super(key);
        this.userName = _userName;
        this.datosPersonales = _datosPersonales;
    }
}
