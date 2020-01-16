import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';

export class TipoDatosContacto extends BaseCatalog {

  @Field('C1', 50101) nombre: string;
  @Field('C2', 50102) validacion: string;
  @Field('C3', 50104) placeholder: string;
  @Field('C4', 50103) maxLength: number;
  @Field('C5', 50105) catalogoID: number;
  @Field('C6', 50106) visible: boolean;
  @Field('C7', 50107) icon: string;

  constructor() { super(); }
}
