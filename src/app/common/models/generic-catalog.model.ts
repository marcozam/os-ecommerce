import { Field } from '../../../core/decorators';
import { BaseCatalog } from './base-catalog.model';

export interface IGenericCatalog {
    key: number;
    nombre: string;
}

export class GenericCatalog extends BaseCatalog implements IGenericCatalog {
    @Field('C1') nombre: string;
    constructor() { super(); }
}
