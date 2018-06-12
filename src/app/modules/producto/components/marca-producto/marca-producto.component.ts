import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
import { MarcaProductoService } from 'app/services/productos/marca-producto.service';
// import { CategoriaProductoService } from '../../services/categoria-producto.service';
// Models
import { MarcaProducto, CategoriaProducto } from 'app/models/productos/producto.models';
import { OSBaseComponent } from 'app/modules/base/typings/os-base.component';
// Constants
import { SuccessTitle, SuccessMessage } from 'app/modules/base/constants/messages.contants';

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.scss'],
  providers: [MarcaProductoService, DialogBoxService]
})
export class MarcaProductoComponent extends OSBaseComponent implements OnInit {
  item: MarcaProducto;
  listaCategorias: CategoriaProducto[];
  marcaID: number;

  constructor(
    private _marcaService: MarcaProductoService,
    private route: ActivatedRoute,
    public dialog: DialogBoxService
  ) {
    // _marcaService
    super([]);
    this.item = new MarcaProducto();
  }

  ngOnInit() {
    this.marcaID = this.route.snapshot.params['detailID'];

    /*
    this._categoriaService.source$.subscribe(list => {
      this.listaCategorias = list;
    });
    */

    // this._categoriaService.getList();
    if (this.marcaID > 0) {
      this._marcaService.getByID(this.marcaID).subscribe(r => this.item = r );
    }
  }

  onSave(value) {
    this.item = Object.assign(this.item, value);
    this._marcaService.save(this.item)
      .subscribe(() => { this.dialog.openDialog(SuccessTitle, SuccessMessage, false); });
  }
}
