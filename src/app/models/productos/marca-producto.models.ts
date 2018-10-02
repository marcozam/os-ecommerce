import { BaseCatalog, Field } from 'app/common';
import { CategoriaProducto } from './categoria-producto.models';

export class MarcaProducto extends BaseCatalog {
    @Field('C1', 40501) nombre: string;
    categorias: CategoriaProducto[];
    categoriasLoaded: boolean;

    constructor() {
        super();
        this.categorias = [];
        this.categoriasLoaded = false;
    }
}
