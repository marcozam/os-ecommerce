import { Injectable } from '@angular/core';
// Models
import { CategoriaProducto, MarcaProducto } from 'models/productos';
// Services
import { BaseAjaxService } from '../base-ajax.service';
import { GenericService } from '../generic.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriaProductoService extends GenericService<CategoriaProducto> {
    constructor(_db: BaseAjaxService) { super(_db, 403); }
    newInstance() { return new CategoriaProducto(''); }

    mapData(data: any): CategoriaProducto {
        const item = super.mapData(data);
        if (!item.catalogoID) { item.catalogoID = 0; }
        return item;
    }

    map2Server(value: CategoriaProducto) {
        if (value.catalogoID === 0) { value.catalogoID = undefined; }
        return super.map2Server(value);
    }

    getByMarca(marcaID: number) {
        const params = this.db.createParameter('ECOM0005', 3, { 'V3': marcaID });
        return this.db.getData(params).pipe(map(result => this.mapList(result.Table)));
    }
}
