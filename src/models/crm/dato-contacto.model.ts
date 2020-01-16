import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { TipoDatosContacto } from '../crm';

export class DatoContacto extends BaseCatalog {
  @Field('C1', 50201) nombre: string;
  @Field('C2', 50202) contactoID: number;
  @Field('C3', 50203) tipoDatoContactoID: number;
  @Field('C4', 50204) valor: string;

  private _tipoDatoContacto: TipoDatosContacto;
  get tipoDatoContacto(): TipoDatosContacto { return this._tipoDatoContacto; }
  set tipoDatoContacto(value) {
    this._tipoDatoContacto = value;
    this.tipoDatoContactoID = this.tipoDatoContacto.key;
  }

  constructor() { super(); }
}
