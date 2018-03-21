import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// Constants
import { SuccessTitle, SuccessMessage } from 'app/modules/base/constants/messages.contants';
// Models
import { MetaDataCatalog } from 'app/modules/generic-catalogs/models/metadata-catalogs.models';
import { CategoriaProductoSumary } from '../../models/producto.models';
import { OSBaseComponent } from 'app/modules/base/typings/os-base.component';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
import { CatalogsMetadataService } from 'app/modules/generic-catalogs/services/catalogs-metadata.service';
import { CategoriaProductoService } from '../../services/categoria-producto.service';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss'],
  providers: [CatalogsMetadataService, CategoriaProductoService, DialogBoxService]
})
export class CategoriaProductoComponent extends OSBaseComponent implements OnInit {
  item: CategoriaProductoSumary;
  catalogos: MetaDataCatalog[];
  categoriaID: number;

  constructor(
    private _catalogService: CatalogsMetadataService,
    private _categoriaService: CategoriaProductoService,
    private route: ActivatedRoute,
    public dialog: DialogBoxService) {
    super([_catalogService, _categoriaService]);
    this.item = new CategoriaProductoSumary('');
  }

  ngOnInit() {
    this.categoriaID = this.route.snapshot.params['detailID'];
    this._catalogService.source$.subscribe(result => this.catalogos = result);
    this._catalogService.getList();

    if (this.categoriaID > 0) {
      this._categoriaService.getByID(this.categoriaID).subscribe(r => this.item = r );
    }
  }

  onSave(value) {
    this.item = Object.assign(this.item, value);
    this._categoriaService.save(this.item)
      .subscribe(() => { this.dialog.openDialog(SuccessTitle, SuccessMessage, false); });
  }
}
