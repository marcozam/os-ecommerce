import { BaseCatalog, Field } from 'app/common';

export class Status extends BaseCatalog {
    @Field('C1') nombre: string;
    @Field('C2') usoStatus: number;
}
