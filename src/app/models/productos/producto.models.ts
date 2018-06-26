import { BaseCatalog } from '../base';
import { Field } from 'app/helpers/decorators';

export class CategoriaProducto extends BaseCatalog {
  @Field('C1', 40301) nombre: string;
  @Field('C2', 40302) catalogoID: number;
  @Field('C3', 40303) formatoNombre: string;
  @Field('C4', 40304) usaInventario: boolean;

  // For data management
  productosLoaded: boolean;
  // productosLoading: boolean;

  constructor(_nombre: string) {
    super();
    this.key = 0;
    this.nombre = _nombre;
    this.usaInventario = true;
    this.catalogoID = 0;
    this.formatoNombre = '';
    // For data management
    this.productosLoaded = false;
    // this.productosLoading = false;
  }
}

export class MarcaProducto extends BaseCatalog {
  @Field('C1') nombre: string;
}

export class Producto extends BaseCatalog {
  @Field('C1') nombre: string;
  @Field('C2') categoriaProductoID: number;
  @Field('C4') requireProcesamiento = false;
  @Field('C5') SKU: string;
  @Field('C6') detalleID: number;
  marcaID?: number;

  imagen?: string;
  descripcion?: string;
  precio = 0;

  private _categoriaProducto: CategoriaProducto;
  get categoriaProducto(): CategoriaProducto { return this._categoriaProducto; }
  set categoriaProducto(value: CategoriaProducto) {
    this._categoriaProducto = value;
    this.categoriaProductoID = value ? Number(value.key) : 0;
  }

  constructor(_nombre: string, _categoria?: CategoriaProducto) {
    super();
    this.key = 0;
    this.nombre = _nombre;
    this.categoriaProducto = _categoria;
  }
}

export class PrecioProducto {
  productoID: number;
  listaPreciosID: number;
  precio: number;
  constructor(productID: number) {
    this.productoID = productID;
    this.precio = 0;
  }
}

export class ListaPrecios extends BaseCatalog {
  nombre: string;
  fechaInicio: number;
  fechaFin: number;

  // Reference Properties
  precios?: PrecioProducto[];
}
