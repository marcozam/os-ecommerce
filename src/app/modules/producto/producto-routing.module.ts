import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaProductoComponent } from './components/categoria-producto/categoria-producto.component';
import { ProductosComponent } from './containers/productos/productos.component';
import { ProductosListComponent } from './containers/productos-list/productos-list.component';
import { MarcaProductoComponent } from './components/marca-producto/marca-producto.component';

const routes: Routes = [
  { path: '', component: ProductosListComponent, data: { title: 'Productos' }, pathMatch: 'full' },
  { path: 'detail/:id', component: ProductosComponent, data: { title: 'Producto' } },
  { path: 'marcas', component: MarcaProductoComponent, data: { title: 'Marcas de Productos'}},
  { path: 'categorias/:id', component: CategoriaProductoComponent, data: { title: 'Categoria de Productos' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
