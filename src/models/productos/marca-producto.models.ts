import { Field } from 'core/decorators';
import { BaseCatalog } from '../base-catalog.model';
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
