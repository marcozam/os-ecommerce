import { Field } from 'core/decorators';
import { PERIODO_TIEMPO_KEY, STATUS_KEY } from 'core/constants';
import { Empresa } from '../general';
import { BaseCatalog } from '../base-catalog.model';

export class RelacionLaboral extends BaseCatalog {
  private _patron: Empresa;

  @Field('C1') empleadoId: number;
  @Field('C2') patronId: number;
  @Field('C3') noEmpleado: string; // Optional
  @Field('C4') periocidadPagoId: PERIODO_TIEMPO_KEY;
  @Field('C5') fechaIngreso: Date;
  @Field('C6') fechaBaja: Date; // Optional
  @Field('C7') statusId: STATUS_KEY;

  get patron() { return this._patron; }
  set patron(value: Empresa) {
    this._patron = value;
    this.patronId = value ? value.key : 0;
  }

  constructor(empleadoId?: number, patron?: Empresa, fechaIngreso?: Date, periocidadPagoId: PERIODO_TIEMPO_KEY = PERIODO_TIEMPO_KEY.Quincenal) {
    super();
    this.empleadoId = empleadoId;
    this.periocidadPagoId = periocidadPagoId;
    this.fechaIngreso = fechaIngreso;
    this.patron = patron;
    this.statusId = STATUS_KEY.RelacionActiva;
  }
}
