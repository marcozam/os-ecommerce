import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class Banco extends BaseCatalog {

  @Field('C1') nombre: string;

  constructor(key: number, _nombre: string) {
    super(key);
    this.nombre = _nombre;
  }
}
