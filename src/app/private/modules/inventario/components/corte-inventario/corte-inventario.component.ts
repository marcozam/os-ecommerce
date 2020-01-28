import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { DialogBoxService } from 'app/common/services';
// HTTP
import { InventarioService } from 'services/http/inventarios';
import { CategoriaProductoService } from 'services/http/productos';
// Models
import { Inventario } from 'models/inventario';
import { CategoriaProducto } from 'models/productos';
import { OSListComponent, OSTableColumn } from 'app/common';

@Component({
  selector: 'app-corte-inventario',
  templateUrl: './corte-inventario.component.html',
  styleUrls: ['./corte-inventario.component.scss'],
  providers: [
    InventarioService,
    CategoriaProductoService,
    DialogBoxService
  ]
})
export class CorteInventarioComponent extends OSListComponent<Inventario> implements OnInit {

  sucursalID: number;
  categorias: CategoriaProducto[];
  selectedCategory: CategoriaProducto;

  // Define Columns
  tableColumns = [
    new OSTableColumn('categoria', 'Categoria', item => item.producto.categoriaProducto ? item.producto.categoriaProducto.nombre : ''),
    new OSTableColumn('producto', 'Producto', item => item.producto.nombre),
    new OSTableColumn('cantidad_actual', 'Sistema', item => item.cantidad),
    new OSTableColumn('cantidad_fisica', 'Fisico', item => item.cantidadFisica ? item.cantidadFisica : 0)
  ];

  constructor(
    router: Router,
    route: ActivatedRoute,
    private _service: InventarioService,
    private _categoriaService: CategoriaProductoService,
    private dialog: DialogBoxService
  ) {
    super(router, route);
    /*
    this.dataSource.filter = () => {
      return this.selectedCategory ?
        this.selectedCategory.nombre === 'All' ?
        this.dataSource.data :
        this.dataSource.data.filter(inv => inv.producto.categoriaProductoID === this.selectedCategory.key) : this.dataSource.data;
    };
    */
    // Defines default sort
    /*
    this.dataSource.columns[0].sortOrder = 0;
    this.dataSource.columns[0].sortDirection = 'desc';
    this.dataSource.columns[1].sortOrder = 1;
    this.dataSource.columns[1].sortDirection = 'desc';
    */
  }

  createSubscriptions() {
    /*
    this._categoriaService.source$.subscribe(result => this.categorias = result);

    this._service.source$.subscribe(result => {
      this.dataSource.updateDataSource(result);
      this.syncWithLocalCopy();
    });
    */
  }

  ngOnInit() {
    this.sucursalID = 1;
    this.createSubscriptions();
    // Get Initial Data
    this._service.getInventarioActual(this.sucursalID);
    // this._categoriaService.getStockCategories();
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
