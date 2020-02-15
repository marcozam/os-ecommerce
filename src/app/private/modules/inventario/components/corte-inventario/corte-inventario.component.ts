import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// Angular Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// RxJS
import { takeUntil, map } from 'rxjs/operators';
// NgRx Store
import { Store } from '@ngrx/store';
import * as fromStore from 'store';
// Common
import { OSBaseDestroyComponent } from 'app/common-forms/components';
// Services
import { DialogBoxService } from 'app/common/services';
// Models
import { Inventario } from 'models/inventario';
import { CategoriaProducto } from 'models/productos';
import { OSTableColumn } from 'app/common';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-corte-inventario',
  templateUrl: './corte-inventario.component.html',
  styleUrls: ['./corte-inventario.component.scss'],
})
export class CorteInventarioComponent extends OSBaseDestroyComponent implements OnInit, AfterViewInit {

  categorias$ = this.store$.select(fromStore.getStockCategories);
  dataSource: MatTableDataSource<{
    categoria: string;
    producto: string;
    cantidad: number;
    cantidadFisica: number;
  }>;
  columnsName = ['categoria', 'producto', 'cantidad', 'cantidadFisica'];
  pageSizeOptions: number[] = [25, 50, 100];
  loading = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  selectedCategory: CategoriaProducto;

  constructor(
    private store$: Store<fromStore.InventarioModuleState>,
    private dialog: DialogBoxService
  ) {
    super();
    /*
    this.dataSource.filter = () => {
      return this.selectedCategory ?
        this.selectedCategory.nombre === 'All' ?
        this.dataSource.data :
        this.dataSource.data.filter(inv => inv.producto.categoriaProductoID === this.selectedCategory.key) : this.dataSource.data;
    };
    */
  }

  /*
    this._service.source$.subscribe(result => {
      this.dataSource.updateDataSource(result);
      this.syncWithLocalCopy();
    });
    */

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.store$.select(fromStore.selectInvetario).pipe(
      takeUntil(this.destroyed$),
      map(inventario => inventario.map(({ producto, cantidad, cantidadFisica }) => ({
          categoria: producto.categoriaProducto.nombre,
          producto: producto.nombre,
          cantidad,
          cantidadFisica,
        })))
    ).subscribe(list => this.dataSource.data = list);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /*
  ngOnDestroy() {
    const workingData = this.dataSource.data.filter(row => row.cantidadFisica);
    if (workingData.length > 0) {
      this.dialog.openDialog('Advertencia!', '¿Desea guardar la informacion capturada?', true, (res) => {
        if (res) {
          localStorage.setItem('inventario', JSON.stringify(workingData));
        } else {
          localStorage.removeItem('inventario');
        }
      });
    }
  }
  */

  syncWithLocalCopy() {
    const data = localStorage.getItem('inventario');
    if (data) {
      this.dialog.openDialog(
        'Informacion',
        'Existe informacion del inventario. ¿Desea utilizar esta informacion?',
        {
          showButtons: true,
          onClose: (res) => {
            if (res) {
              // const localInv: Inventario[] = JSON.parse(data);
              /*
              localInv.forEach(inv => {
                const item = this.dataSource.data.find(ds => ds.productoID === inv.productoID);
                item.cantidadFisica = inv.cantidadFisica;
              });
              */
            } else { localStorage.removeItem('inventario'); }
          }
        });
    }
  }

  onSave() {
    /*
    this._service.realizarCorte(this.sucursalID, this.dataSource.data).subscribe(() => {
      localStorage.removeItem('inventario');
      this.dialog.openDialog('Registro exitoso!', 'El corte se ha guardado con exito.', false);
    });
    */
  }

  onCategoriaChange(cat: CategoriaProducto) {
    this.selectedCategory = cat;
    // this.dataSource.applyFilters();
  }
}
