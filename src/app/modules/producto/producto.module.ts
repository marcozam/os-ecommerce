import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from 'app/root-store/productos-store';

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

// Routing
import { ProductoRoutingModule } from './producto-routing.module';
// OS Modules
import { BaseModule } from 'app/modules/base/base.module';
// Containers
import { ProductosComponent } from './containers/productos/productos.component';
// Components
import { DetallePreciosProductoComponent } from './components/detalle-precios-producto/detalle-precios-producto.component';
import { CategoriaProductoComponent } from './components/categoria-producto/categoria-producto.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';
import { MarcaProductoComponent } from './components/marca-producto/marca-producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
// Services
import * as productosServices from 'app/services/productos';
import * as productosGuards from 'app/services/productos/guards';
import { MarcasListComponent } from './components/marcas-list/marcas-list.component';
import { MarcaProductoFormComponent } from './components/marca-producto-form/marca-producto-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Routing
    ProductoRoutingModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    // OS Module
    BaseModule,
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
    MatTableModule
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
  ],
  exports: [
    ProductoRoutingModule,
    ProductosComponent,
    ProductosListComponent,
    DetallePreciosProductoComponent,
  ],
  providers: [
    ...productosGuards.guards,
    ...productosServices.services
  ]
})
export class ProductoModule { }
