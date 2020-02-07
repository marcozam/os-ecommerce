import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { Persona, Empresa } from '../general';
import { DatoContacto } from '../crm';

export enum TipoDatoContacto {
  Persona = 1,
  Empresa = 2,
}

export class Contacto extends BaseCatalog {

  @Field('C1', 50302) referenceID: number;
  @Field('C2', 50301) tipoID: TipoDatoContacto;
  persona?: Persona;
  empresa?: Empresa;
  datos: DatoContacto[];

  public get nombre(): string {
    if (this.tipoID === TipoDatoContacto.Persona) {
      return this.persona ? this.persona.nombreCompleto : '';
    }
    return this.empresa ? this.empresa.nombre : '';
  }

  constructor() {
    super();
    this.datos = [];
  }
}
