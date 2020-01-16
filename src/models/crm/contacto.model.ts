import { Field } from 'core/decorators';

import { BaseCatalog } from '../base-catalog.model';
import { Persona, Empresa } from '../general';
import { DatoContacto } from '../crm';

export class Contacto extends BaseCatalog {
  @Field('C1', 50301)  tipoID: number;
  @Field('C2', 50302)  referenceID: number;
  persona?: Persona;
  empresa?: Empresa;
  datos: DatoContacto[];

  public get nombre(): string {
    return this.persona ? this.persona.nombreCompleto.toUpperCase() : this.empresa.nombre.toUpperCase();
  }

  constructor() {
    super();
    this.persona = new Persona();
    this.datos = [];
  }
}
