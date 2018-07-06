import { Field } from 'app/helpers/decorators';

import { BaseCatalog } from '../base';
import { MarcaProducto } from './marca-producto.models';
import { CategoriaProducto } from './categoria-producto.models';

export class Producto extends BaseCatalog {
  @Field('C1') nombre: string;
  @Field('C2') categoriaProductoID: number;
  // @Field('C4') requireProcesamiento = false;
  @Field('C5') SKU: string;
  @Field('C6') detalleID: number;
  marcaProductoID: number;

  imagen?: string;
  descripcion?: string;
  precio = 0;

  private _categoriaProducto: CategoriaProducto;
  get categoriaProducto(): CategoriaProducto { return this._categoriaProducto; }
  set categoriaProducto(value: CategoriaProducto) {
    this._categoriaProducto = value;
    this.categoriaProductoID = value ? Number(value.key) : 0;
  }

  private _marcaProducto: MarcaProducto;
  get marcaProducto(): MarcaProducto { return this._marcaProducto; }
  set marcaProducto(value: MarcaProducto) {
    this._marcaProducto = value;
    this.marcaProductoID = value ? Number(value.key) : 0;
  }

  constructor(_nombre: string, _categoria?: CategoriaProducto) {
    super();
    this.key = 0;
    this.nombre = _nombre;
    this.categoriaProducto = _categoria;
    this.marcaProductoID = 0;
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
