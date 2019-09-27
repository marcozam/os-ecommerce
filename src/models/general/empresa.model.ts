import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class Empresa extends BaseCatalog {
    @Field('C1') nombre: string;
}
