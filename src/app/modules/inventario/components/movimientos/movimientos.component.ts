import { Component, OnInit } from '@angular/core';
import { MovimientosInventarioService } from 'app/modules/inventario/services/movimientos-inventario.service';

import { MovimientoInventario, TipoMovimientoInventario } from 'app/modules/inventario/models/inventario.models';
import { CategoriaProducto } from 'app/models/productos';
import { OSPeriodo } from 'app/modules/base/models/time-frame.models';
import { periodos } from 'app/modules/base/constants/date-time.constants';

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
  categorias: CategoriaProducto[];
  tipoMovimientos: TipoMovimientoInventario[];

  // TODO: Add table component with filters
  // Filter Options
  showFilters = false;
  selectedCategory: CategoriaProducto;
  selectedTipoMovimiento: TipoMovimientoInventario;

  _periodos: OSPeriodo[];

  constructor(private service: MovimientosInventarioService) {
    this._periodos = periodos;
  }

  createSubscriptions() {
    /*
    this.loading$.subscribe((isLoading: boolean) => {
      this.loading = this._categoriaService.isLoading || this._service.isLoading;
    });
    */
    // this._categoriaService.source$.subscribe(result => this.categorias = result);
  }

  ngOnInit() {
    this.sucursalID = 1;
    // this._categoriaService.getStockCategories();
    this.service.getTipoMovimientos(res => this.tipoMovimientos = res);
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
      _periodo.end,
      (res: MovimientoInventario[]) => {
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
