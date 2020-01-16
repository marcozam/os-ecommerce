
import { BaseCatalog } from '../base-catalog.model';
import { Producto } from '../productos';

export class Inventario extends BaseCatalog {
    producto?: Producto;
    cantidad: number;
    cantidadFisica?: number;

    productoID: number;
    ubicacionlID: number;
}
