import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export interface IEmpresa {
  nombre: any;
}

export class Empresa extends BaseCatalog implements IEmpresa {
    @Field('C1', 201) nombre: string;
    constructor(key: number, _nombre: string) {
      super(key);
      this.nombre = _nombre;
    }
}
