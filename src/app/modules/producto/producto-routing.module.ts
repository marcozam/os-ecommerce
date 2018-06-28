import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Resolvers
import * as fromResolvers from 'app/services/productos/resolvers';

// Containers
import { MarcaProductoComponent } from './containers/marca-producto/marca-producto.component';
import { CategoriaProductoComponent } from './containers/categoria-producto/categoria-producto.component';
import { ProductosComponent } from './containers/productos/productos.component';
// Components
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { MarcasListComponent } from './components/marcas-list/marcas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'categorias', pathMatch: 'full' },
  {
    path: 'categorias', component: CategoriasListComponent,
    data: { title: 'Categorias' },
    resolve: {
      list: fromResolvers.CategoriasListResolver
    }
  },
  {
    path: 'categorias/productos/:categoryId', component: ProductosListComponent,
    data: { title: 'Productos' },
    resolve: {
      categoria: fromResolvers.CategoriaDetailResolver,
      list: fromResolvers.ProductosListResolver
    },
  },
  {
    path: 'categorias/productos/:categoryId/detail/:productoId', component: ProductosComponent,
    data: { title: 'Producto' }
  },
  {
    path: 'marcas', component: MarcasListComponent,
    data: { title: 'Marcas de Productos' },
    resolve: {
      list: fromResolvers.MarcasListResolver
    }
  },
  {
    path: 'marcas/:marcaId', component: MarcaProductoComponent,
    data: { title: 'Marcas de Productos'},
    resolve: {
      item: fromResolvers.MarcaDetailResolver,
      categorias: fromResolvers.CategoriasListResolver
    }
  },
  {
    path: 'categorias/:categoryId', component: CategoriaProductoComponent,
    data: { title: 'Categoria de Productos' },
    resolve: {
      item$: fromResolvers.CategoriaDetailResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ...fromResolvers.resolvers
  ]
})
export class ProductoRoutingModule { }
