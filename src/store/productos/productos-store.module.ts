import { NgModule } from '@angular/core';
// NgRx
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName, ProductsModuleState } from './constants';
// Services
import {
  ProductosService,
  MarcaProductoService,
  CategoriaProductoService,
} from 'services/http/productos';

import { CategoriasState, CategoriasEffects, categoriasReducer } from './categorias';
import { ProducstosState, ProductosEffects, productosReducer } from './productos';
import { MarcasState, MarcasEffects, marcasReducer } from './marcas';

const reducers: ActionReducerMap<ProductsModuleState> = {
  productos: (state: ProducstosState, action: Action) => productosReducer(state, action),
  categorias: (state: CategoriasState, action: Action) => categoriasReducer(state, action),
  marcas: (state: MarcasState, action: Action) => marcasReducer(state, action),
};

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducers),
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
