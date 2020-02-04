import { NgModule } from '@angular/core';
// OS Common
import { OSCommonModule } from 'app/common/common.module';
// Angular Material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

// Store Modules
import { ProductosStoreModule } from 'store/productos/productos-store.module';
import { InventariosStoreModule } from 'store/inventarios/inventarios-store.module';
// Routing Modules
import { InventarioRoutingModule } from './routing/inventario-routing.module';
// Components
import * as components from './components';

@NgModule({
  imports: [
    OSCommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ProductosStoreModule,
    InventariosStoreModule,
    InventarioRoutingModule,
  ],
  declarations: [
    components.MovimientosComponent,
    components.CorteInventarioComponent,
  ]
})
export class InventarioModule { }
