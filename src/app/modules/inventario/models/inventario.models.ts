import { Producto } from 'app/models/productos/producto.models';
import { GenericCatalog, BaseCatalog } from 'app/common';

export class TipoMovimientoInventario extends GenericCatalog { }

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

export class Inventario extends BaseCatalog {
    producto?: Producto;
    cantidad: number;
    cantidadFisica?: number;

    productoID: number;
    ubicacionlID: number;
}
