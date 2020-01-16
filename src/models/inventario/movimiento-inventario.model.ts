import { BaseCatalog } from '../base-catalog.model';
import { Producto } from '../productos';
import { Inventario } from './inventario.model';

export class TipoMovimientoInventario extends BaseCatalog {
  nombre: string;
}

export class MovimientoInventario {
    tipoMovimiento: TipoMovimientoInventario;
    producto: Producto;
    cantidad: number;
    fecha: Date;

    inventario: Inventario;

    constructor(_producto: Producto) {
        this.producto = _producto;
    }
}
