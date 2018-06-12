import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CategoriasListGuard,
  ProductosListGuard,
  CategoriaDetailGuard,
  MarcasListGuard,
  MarcaDetailGuard
} from 'app/services/productos/guards';

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
    canActivate: [CategoriasListGuard]
  },
  {
    path: 'categorias/productos/:categoryId', component: ProductosListComponent,
    data: { title: 'Productos' },
    canActivate: [CategoriaDetailGuard, ProductosListGuard]
  },
  {
    path: 'categorias/productos/:categoryId/detail/:productoId', component: ProductosComponent,
    data: { title: 'Producto' }
  },
  {
    path: 'marcas', component: MarcasListComponent,
    data: { title: 'Marcas de Productos' },
    canActivate: [MarcasListGuard]
  },
  {
    path: 'marcas/:marcaId', component: MarcaProductoComponent,
    data: { title: 'Marcas de Productos'},
    canActivate: [MarcaDetailGuard]
  },
  {
    path: 'categorias/:categoryId', component: CategoriaProductoComponent,
    data: { title: 'Categoria de Productos' },
    canActivate: [CategoriaDetailGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
