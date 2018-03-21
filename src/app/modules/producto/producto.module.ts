import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

// Routing
import { ProductoRoutingModule } from './producto-routing.module';
// OS Modules
import { BaseModule } from 'app/modules/base/base.module';
// Components
import { ProductosComponent } from './containers/productos/productos.component';
import { ProductosListComponent } from './containers/productos-list/productos-list.component';
import { CategoriaProductoComponent } from './components/categoria-producto/categoria-producto.component';
import { DetallePreciosProductoComponent } from './components/detalle-precios-producto/detalle-precios-producto.component';
import { MarcaProductoComponent } from './components/marca-producto/marca-producto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // Routing
    ProductoRoutingModule,
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
    MatListModule
  ],
  declarations: [
    // OS Components
    ProductosComponent,
    ProductosListComponent,
    CategoriaProductoComponent,
    DetallePreciosProductoComponent,
    MarcaProductoComponent,
  ],
  exports: [
    ProductoRoutingModule,
    ProductosComponent,
    ProductosListComponent,
    DetallePreciosProductoComponent,
  ],
  providers: []
})
export class ProductoModule { }
