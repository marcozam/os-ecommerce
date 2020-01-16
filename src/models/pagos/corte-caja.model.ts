import { BaseCatalog } from '../base-catalog.model';
import { Usuario, Sucursal } from '../general';
import { DetalleCorteCaja } from './detalle-corte-caja.model';
import { MovimientoCaja } from './movimiento-caja.model';

export class CorteCaja extends BaseCatalog {
  movimientos: MovimientoCaja[];
  detalle: DetalleCorteCaja[];
  fechaCorte: Date;
  usuario: Usuario;
  sucursal: Sucursal;

  totalEsperado: number;
  totalRecibido: number;
  get diferencia(): number {
    return this.totalEsperado - this.totalRecibido;
  }

  constructor(public sucursalID: number, public usuarioID: number) {
    super();
    this.detalle = [];
    this.movimientos = [];
    this.usuario = new Usuario();
    this.usuario.key = usuarioID;
    this.sucursal = new Sucursal();
    this.sucursal.key = sucursalID;
  }
}
