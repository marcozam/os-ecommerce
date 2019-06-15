import { BaseCatalog } from 'app/common';

import { TipoDatosContacto } from '../crm';

export class DatoContacto extends BaseCatalog {
    contactoID: number;
    valor: string;
    tipoContactoID: number;
    tipoContacto?: TipoDatosContacto;
    constructor() { super(); }
}
