import { Injectable } from '@angular/core';
// RxJs
import { map } from 'rxjs/operators';
// Services
import { GenericService, GenericServiceBase } from 'app/modules/generic-catalogs/services/generic.service';
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';
// Models
import { Producto } from 'app/models/productos/producto.models';

@Injectable()
export class ProductosService extends GenericService<Producto> implements GenericServiceBase<Producto> {

    constructor(_osBD: BaseAjaxService) {
        super(_osBD);
        this.catalogID = 402;
    }

    newInstance(): Producto { return new Producto(''); }

    getProductsByCategory(categoryID: number) {
        return this.db.getAllDataFromCatalog(this.catalogID, `40202,${categoryID}`)
            .pipe(map((result) =>  this.mapList(result)));
    }

    getProductByDetail(ID: number, categoryID: number) {
        return this.db.getAllDataFromCatalog(this.catalogID, `40202,${categoryID}~40206,${ID}`)
            .pipe(map((result: any) => result.length > 0 ? this.mapData(result[0]) : new Producto('')));
    }

    save(item: Producto) {
        const params = this.db.createParameter('ECOM0005', 1, {
            V3: item.key,
            V4: item.nombre,
            V6: item.requireProcesamiento ? 1 : 0,
            V9: item.categoriaProductoID,
            V7: item.SKU,
            V8: item.detalleID ? item.detalleID : 0
        });
        return this.db.getData(params).pipe(
            map(result => result.Table.length > 0 ? this.mapData(result.Table[0]) : null));
    }
}
