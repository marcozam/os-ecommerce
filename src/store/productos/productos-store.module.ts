import { NgModule } from '@angular/core';
// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName } from './constants';
// Services
import {
  ProductosService,
  MarcaProductoService,
  CategoriaProductoService,
} from 'services/http/productos';

import { CategoriasEffects, categoriasReducer } from './categorias';
import { ProductosEffects, productosReducer } from './productos';
import { MarcasEffects, marcasReducer } from './marcas';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, {
      productos: productosReducer,
      categorias: categoriasReducer,
      marcas: marcasReducer,
    }),
    EffectsModule.forFeature([
      CategoriasEffects,
      ProductosEffects,
      MarcasEffects,
    ])
  ],
  providers: [
    ProductosService,
    MarcaProductoService,
    CategoriaProductoService,
  ],
  declarations: []
})
export class ProductosStoreModule { }
