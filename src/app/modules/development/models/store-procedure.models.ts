import { Field } from 'core/decorators';
import { BaseCatalog } from 'models';

export class StoreProcedureMetaData extends BaseCatalog {
  @Field('C1', 29901) nombre: string;
  @Field('C2', 29902) description: string;

  options: StoreProcedureOptionMetaData[];

  constructor() {
    super();
  }
}

export class StoreProcedureOptionMetaData extends BaseCatalog {
  @Field('C1', 29801) storeProcedureID: number;
  @Field('C2', 29802) opcion: number;
  @Field('C3', 29803) description: string;
  @Field('C4', 29804) allowAll: boolean;

  constructor() {
    super();
  }
}
