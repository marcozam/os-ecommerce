import { NgModule } from '@angular/core';
// OS Common
import { OSCommonModule } from 'app/common/common.module';
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
