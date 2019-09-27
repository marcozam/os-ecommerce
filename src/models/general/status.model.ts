import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class Status extends BaseCatalog {
    @Field('C1') nombre: string;
    @Field('C2') usoStatus: number;
}
