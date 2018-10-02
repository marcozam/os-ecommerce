import { Field } from 'app/helpers/decorators';

import { BaseCatalog } from '../base';

export class Status extends BaseCatalog {
    @Field('C1') nombre: string;
    @Field('C2') usoStatus: number;
}
