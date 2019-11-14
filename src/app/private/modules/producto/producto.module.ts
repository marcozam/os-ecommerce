import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
// Stores
import { ProductosStoreModule } from 'store/productos/productos-store.module';
// Routing
import { ProductoRoutingModule } from './routing/producto-routing.module';
// Containers
import { MarcaProductoComponent } from './containers/marca-producto/marca-producto.component';
import { CategoriaProductoComponent } from './containers/categoria-producto/categoria-producto.component';
import { ProductosComponent } from './containers/productos/productos.component';
// Components
import { DetallePreciosProductoComponent } from './components/detalle-precios-producto/detalle-precios-producto.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { MarcasListComponent } from './components/marcas-list/marcas-list.component';
import { MarcaProductoFormComponent } from './components/marca-producto-form/marca-producto-form.component';
import { CategoriaProductoFormComponent } from './components/categoria-producto-form/categoria-producto-form.component';
import { GrupoCategoriaComponent } from './components/grupo-categoria/grupo-categoria.component';
// Shared Components
import { OSCommonModule } from 'app/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // Stores
    ProductosStoreModule,
    // Routing
    ProductoRoutingModule,
    // Shared Components
    OSCommonModule,
    // Material
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: [
    // OS Components
    ProductosComponent,
    ProductosListComponent,
    CategoriaProductoComponent,
    DetallePreciosProductoComponent,
    MarcaProductoComponent,
    CategoriasListComponent,
    ProductoFormComponent,
    MarcasListComponent,
    MarcaProductoFormComponent,
    CategoriaProductoFormComponent,
    GrupoCategoriaComponent
  ],
  exports: [
    ProductoRoutingModule,
    ProductosComponent,
    ProductosListComponent,
    DetallePreciosProductoComponent
  ]
})
export class ProductoModule { }
