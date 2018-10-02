import { BaseCatalog, Field } from 'app/common';

export class Empresa extends BaseCatalog {
    @Field('C1') nombre: string;
}
