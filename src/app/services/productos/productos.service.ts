import { Injectable } from '@angular/core';
// RxJs
import { map } from 'rxjs/operators';
// Services
import { BaseAjaxService } from '../base-ajax.service';
import { GenericService } from '../generic.service';
// Models
import { Producto } from 'app/models/productos/producto.models';

@Injectable()
export class ProductosService extends GenericService<Producto> {

    constructor(db: BaseAjaxService) { super(db, 402); }

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
