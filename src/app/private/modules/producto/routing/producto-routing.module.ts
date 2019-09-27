import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Resolvers
import * as fromResolvers from './resolvers';

// Containers
import { MarcaProductoComponent } from '../containers/marca-producto/marca-producto.component';
import { CategoriaProductoComponent } from '../containers/categoria-producto/categoria-producto.component';
import { ProductosComponent } from '../containers/productos/productos.component';
// Components
import { ProductosListComponent } from '../components/productos-list/productos-list.component';
import { CategoriasListComponent } from '../components/categorias-list/categorias-list.component';
import { MarcasListComponent } from '../components/marcas-list/marcas-list.component';
import { PRODUCTOS_ROUTE_STATE_PARAMS } from '../constants';

const routes: Routes = [
  {
    path: 'categorias', component: CategoriasListComponent,
    data: { title: 'Categorias' },
    resolve: { list: fromResolvers.CategoriasListResolver }
  },
  {
    path: `categorias/:${PRODUCTOS_ROUTE_STATE_PARAMS.CATEGORIA_ID}`, component: CategoriaProductoComponent,
    data: { title: 'Categoria de Productos' },
    resolve: { categoria: fromResolvers.CategoriaDetailResolver }
  },
  {
    path: `categorias/list/:${PRODUCTOS_ROUTE_STATE_PARAMS.CATEGORIA_ID}`, component: ProductosListComponent,
    data: { title: 'Productos' },
    resolve: { list: fromResolvers.ProductosListResolver },
  },
  {
    path: `categorias/list/:${PRODUCTOS_ROUTE_STATE_PARAMS.CATEGORIA_ID}/:${PRODUCTOS_ROUTE_STATE_PARAMS.PRODUCTO_ID}`, component: ProductosComponent,
    data: { title: 'Producto' },
    resolve: {
      categoria: fromResolvers.CategoriaDetailResolver,
      producto: fromResolvers.ProductosDetailResolver
    }
  },
  {
    path: 'marcas', component: MarcasListComponent,
    data: { title: 'Marcas de Productos' },
    resolve: { list: fromResolvers.MarcasListResolver }
  },
  {
    path: `marcas/:${PRODUCTOS_ROUTE_STATE_PARAMS.MARCA_ID}`, component: MarcaProductoComponent,
    data: { title: 'Marcas de Productos'},
    resolve: {
      marca: fromResolvers.MarcaDetailResolver,
      categorias: fromResolvers.CategoriasListResolver
    }
  },
  { path: '', redirectTo: 'categorias', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    ...fromResolvers.resolvers
  ]
})
export class ProductoRoutingModule { }
