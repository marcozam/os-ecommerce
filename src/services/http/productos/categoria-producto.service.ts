import { Injectable } from '@angular/core';
// RxJs
import { map } from 'rxjs/operators';
// Services
import { GenericCatalogService, BaseGenericCatalogService } from '../generic-catalogs';
// Models
import { CategoriaProducto } from 'models/productos';

@Injectable()
export class CategoriaProductoService extends BaseGenericCatalogService<CategoriaProducto> {
    constructor(_db: GenericCatalogService) { super(_db, 403); }
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
