import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store';
// Common
import {
  periodos,
  OSPeriodo,
  OSTableColumn,
  OSListComponent,
} from 'app/common';
// Models
import { MovimientoInventario, TipoMovimientoInventario } from 'models/inventario';
import { CategoriaProducto } from 'models/productos';
import { GetMovimientosInventario } from 'store';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovimientosComponent extends OSListComponent<MovimientoInventario> implements OnInit {

  tipoMovimientos$ = this.store$.select(fromStore.selectAllTiposMovimientoInvetarios);
  categorias$ = this.store$.select(fromStore.getStockCategories);
  list$ = this.store$.select(fromStore.selectMovimientosInvetarios);

  tableColumns = [
    new OSTableColumn('categoria', 'Categoria', (item: MovimientoInventario) => item.producto.categoriaProducto.nombre),
    new OSTableColumn('producto', 'Producto', (item: MovimientoInventario) => item.producto.nombre ),
    new OSTableColumn('fecha', 'Fecha', (item: MovimientoInventario) => ''/*item.fecha*/),
    new OSTableColumn('tipoMovimiento', 'Tipo Movimiento', (item: MovimientoInventario) => item.tipoMovimiento.nombre ),
    new OSTableColumn('cantidad', 'Cantidad', (item: MovimientoInventario) => `${item.cantidad}`, { align: 'center' } ),
  ];

  // TODO: Add table component with filters
  // Filter Options
  showFilters = false;
  selectedCategory: CategoriaProducto;
  selectedTipoMovimiento: TipoMovimientoInventario;

  periodos: OSPeriodo[] = periodos;

  constructor(
    private store$: Store<fromStore.InventarioModuleState>,
    private ref: ChangeDetectorRef,
  ) { super(); }

  ngOnInit() {
    super.ngOnInit();
  }

  onCategoriaChange(categoria: CategoriaProducto) {
    this.selectedCategory = categoria;
    if (categoria.nombre === 'All') {
      this.selectedCategory = null;
    }
    this.applyFilters();
  }

  onTipoMovimientoChange(tipo: TipoMovimientoInventario) {
    this.selectedTipoMovimiento = tipo;
    if (tipo.nombre === 'All') {
      this.selectedTipoMovimiento = null;
    }
    this.applyFilters();
  }

  onRangoChanged(payload: OSPeriodo) {
    this.store$.dispatch(GetMovimientosInventario({ payload }));
  }

  applyFilters() {
    /*
    this.movimientos = this.movimientosFull.filter(mi => {
      return (this.selectedCategory ? mi.producto.categoriaProductoID === this.selectedCategory.key : true)
        && (this.selectedTipoMovimiento ? mi.tipoMovimiento.key === this.selectedTipoMovimiento.key : true);
    });
    */
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
