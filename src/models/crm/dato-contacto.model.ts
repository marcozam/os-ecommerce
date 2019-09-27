import { BaseCatalog } from '../base-catalog.model';
import { TipoDatosContacto } from '../crm';

export class DatoContacto extends BaseCatalog {
    contactoID: number;
    valor: string;
    tipoContactoID: number;
    tipoContacto?: TipoDatosContacto;
    constructor() { super(); }
}
