import { Component, OnInit } from '@angular/core';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store';
// Services
import { MovimientosInventarioService } from 'services/http/inventarios';
// Models
import { MovimientoInventario, TipoMovimientoInventario } from 'models/inventario';
import { CategoriaProducto } from 'models/productos';
import { OSPeriodo, periodos } from 'app/common';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss'],
  providers: [MovimientosInventarioService]
})
export class MovimientosComponent implements OnInit {

  sucursalID: number;
  movimientos: MovimientoInventario[];
  movimientosFull: MovimientoInventario[];

  tipoMovimientos$ = this.store$.select(fromStore.selectAllTiposMovimientoInvetarios);
  categorias$ = this.store$.select(fromStore.getStandAloneCategories);

  // TODO: Add table component with filters
  // Filter Options
  showFilters = true;
  selectedCategory: CategoriaProducto;
  selectedTipoMovimiento: TipoMovimientoInventario;

  _periodos: OSPeriodo[];

  constructor(private store$: Store<fromStore.InventarioModuleState>, private service: MovimientosInventarioService) {
    this._periodos = periodos;
  }

  ngOnInit() {
    this.sucursalID = 1;
    // this._categoriaService.getStockCategories();
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

  onRangoChanged(option: OSPeriodo) {
    const _periodo = option.getTimeFrame();

    this.service.getMovimientos(
      this.sucursalID,
      _periodo.start,
      _periodo.end).subscribe((res: MovimientoInventario[]) => {
        this.movimientos = this.movimientosFull = res;
      });
  }

  applyFilters() {
    this.movimientos = this.movimientosFull.filter(mi => {
      return (this.selectedCategory ? mi.producto.categoriaProductoID === this.selectedCategory.key : true)
        && (this.selectedTipoMovimiento ? mi.tipoMovimiento.key === this.selectedTipoMovimiento.key : true);
    });
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
