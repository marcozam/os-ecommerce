import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Resolvers
import * as resolvers from 'app/services/productos/resolvers';

// Containers
import { ProductosComponent } from './containers/productos/productos.component';
// Components
import { CategoriaProductoComponent } from './components/categoria-producto/categoria-producto.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { MarcaProductoComponent } from './components/marca-producto/marca-producto.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { MarcasListComponent } from './components/marcas-list/marcas-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'categorias', pathMatch: 'full' },
  {
    path: 'categorias', component: CategoriasListComponent,
    data: { title: 'Categorias' },
    resolve: {
      list: resolvers.CategoriasListResolver
    }
  },
  {
    path: 'categorias/productos/:categoryId', component: ProductosListComponent,
    data: { title: 'Productos' },
    resolve: {
      categoria: resolvers.CategoriaDetailResolver,
      list: resolvers.ProductosListResolver
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
      list: resolvers.MarcasListResolver
    }
  },
  {
    path: 'marcas/:marcaId', component: MarcaProductoComponent,
    data: { title: 'Marcas de Productos'},
    resolve: {
      item: resolvers.MarcaDetailResolver
    }
  },
  {
    path: 'categorias/:categoryId', component: CategoriaProductoComponent,
    data: { title: 'Categoria de Productos' },
    resolve: {
      item: resolvers.CategoriaDetailResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
