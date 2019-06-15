import { BaseCatalog, Field } from 'app/common';
import { CategoriaProducto } from './categoria-producto.models';

export class GrupoCategoriaProducto extends BaseCatalog {
    @Field('C1', 40601) nombre: string;
    @Field('C2', 40602) categoriaProductoID: number;

    constructor(_nombre: string, public categoria?: CategoriaProducto) {
        super();
        this.nombre = _nombre;
        this.categoriaProductoID = categoria ? categoria.key : 0;
    }
}
