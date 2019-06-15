import { BaseCatalog } from 'app/common';
import { Producto } from '../productos';

export class DetalleVenta extends BaseCatalog {
    cantidad: number;
    precioUnitario: number;
    promocionID: number;
    tipoDescuentoID = 1;
    valorDescuento = 0;
    descuento = 0;
    comentario: string;

    // use to group products
    moduleID = 1;
    canBeRemoved = true;
    canEditCantidad?: boolean;
    canEditPrecio?: boolean;

    productoVenta: Producto;

    get importe(): number { return this.cantidad * (this.precioUnitario - this.descuento); }
    get importeNeto(): number { return this.cantidad * this.precioUnitario; }

    constructor(_producto: Producto, precio?: number) {
        super();
        this.productoVenta = _producto;
        this.cantidad = 1;
        this.precioUnitario = precio ? precio : 0;
        // this.keysChanges = ['cantidad', 'precioUnitario', 'descuento'];
    }
}
