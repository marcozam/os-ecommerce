import { Field } from 'app/helpers/decorators';

import { BaseCatalog } from '../base';
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
