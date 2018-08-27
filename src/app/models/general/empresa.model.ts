import { Field } from 'app/helpers/decorators';

import { BaseCatalog } from '../base';

export class Empresa extends BaseCatalog {
    @Field('C1') nombre: string;
}
