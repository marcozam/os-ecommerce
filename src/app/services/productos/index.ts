import { CategoriaProductoService } from './categoria-producto.service';
import { ProductosService } from './productos.service';
import { MarcaProductoService } from './marca-producto.service';

export const services = [
    CategoriaProductoService,
    ProductosService,
    MarcaProductoService,
];

export * from './categoria-producto.service';
export * from './marca-producto.service';
export * from './productos.service';
