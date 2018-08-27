import { Field } from 'app/helpers/decorators';

import { BaseCatalog } from '../base';
import { MarcaProducto } from './marca-producto.models';

export class CategoriaProducto extends BaseCatalog {
  @Field('C1', 40301) nombre: string;
  @Field('C2', 40302) catalogoID: number;
  @Field('C3', 40303) formatoNombre: string;
  @Field('C4', 40304) usaInventario: boolean;
  @Field('C5', 40305) tieneGrupos: boolean;
  @Field('C6', 40306) requireProcesamiento: boolean;

  // For data management
  productosLoaded: boolean;
  marcasLoaded: boolean;
  marcas: MarcaProducto[];

  constructor(_nombre: string) {
    super();
    this.key = 0;
    this.nombre = _nombre;
    this.usaInventario = true;
    this.catalogoID = 0;
    this.formatoNombre = '';
    // For data management
    this.productosLoaded = false;
    this.marcasLoaded = false;
    this.marcas = [];
  }
}