import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';

export class Colegio extends BaseCatalog {
  @Field('C1') nombre: string;

  constructor(key: number, _nombre: string) {
    super(key);
    this.nombre = _nombre;
  }
}

export class Plantel extends BaseCatalog {
  private _colegio: Colegio;

  @Field('C1') nombre: string;
  @Field('C2') colegioId: number;

  get colegio() { return this._colegio; }
  set colegio(value: Colegio) {
      this._colegio = value;
      this.colegioId = value ? value.key : 0;
  }

  constructor(key: number, _nombre: string, _colegio?: Colegio) {
    super(key);
    this.nombre = _nombre;
    if (_colegio) {
      this.colegio = _colegio;
    }
  }
}

export class NivelEscolar extends BaseCatalog {
  @Field('C1') nombre: string;

  constructor(key: number, _nombre: string) {
    super(key);
    this.nombre = _nombre;
  }
}

export class GradoEscolar extends BaseCatalog {
  private _nivelEscolar: NivelEscolar;

  @Field('C1') nombre: string;
  @Field('C2') nivelEscolarId: number;

  get nivelEscolar() { return this._nivelEscolar; }
  set nivelEscolar(value: NivelEscolar) {
      this._nivelEscolar = value;
      this.nivelEscolarId = value ? value.key : 0;
  }

  constructor(key: number, _nombre: string, nivel: NivelEscolar) {
    super(key);
    this.nombre = _nombre;
    this.nivelEscolar = nivel;
  }
}

export * from './alumno.model';
export * from './tutor.model';
