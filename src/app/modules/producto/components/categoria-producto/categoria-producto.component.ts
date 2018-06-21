import { Component, OnInit } from '@angular/core';
// RxJs
import { Observable, of } from 'rxjs';
// Store
import { Store } from '@ngrx/store';
import * as fromStore from 'app/root-store/productos-store';
// Constants
// import { SuccessTitle, SuccessMessage } from 'app/modules/base/constants/messages.contants';
// Models
import { MetaDataCatalog } from 'app/modules/generic-catalogs/models/metadata-catalogs.models';
import { CategoriaProducto } from 'app/models/productos/producto.models';
// Services
import { DialogBoxService } from 'app/modules/base/services/dialog-box.service';
import { CatalogsMetadataService } from 'app/modules/generic-catalogs/services/catalogs-metadata.service';

@Component({
  selector: 'app-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss'],
  providers: [CatalogsMetadataService, DialogBoxService]
})
export class CategoriaProductoComponent implements OnInit {
  item$: Observable<CategoriaProducto>;
  catalogos: MetaDataCatalog[];

  constructor(
    private store: Store<fromStore.ProductsModuleState>,
    private _catalogService: CatalogsMetadataService,
    public dialog: DialogBoxService
  ) {
    this.item$ = of(new CategoriaProducto(''));
  }

  ngOnInit() {
    this.item$ = this.store.select(fromStore.getSelectedCategoria);
    this._catalogService.getList();
  }

  onSave(value) {
    console.log(value);
    // this.item = Object.assign(this.item, value);
    /*
    this._categoriaService.save(this.item)
      .subscribe(() => { this.dialog.openDialog(SuccessTitle, SuccessMessage, false); });
    */
  }
}
