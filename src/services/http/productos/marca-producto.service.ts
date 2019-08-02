import { Injectable } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
// Services
import { GenericCatalogService, BaseGenericCatalogService } from '../generic-catalogs';
// Models
import { MarcaProducto } from 'models/productos';

@Injectable()
export class MarcaProductoService extends BaseGenericCatalogService<MarcaProducto> {
    constructor(_db: GenericCatalogService) { super(_db, 405); }
    newInstance() { return new MarcaProducto(); }
    save(newItem: MarcaProducto, oldItem: MarcaProducto): Observable<MarcaProducto> {
        return super.save(newItem, oldItem).pipe(
            switchMap(item => {
                return this.saveCategorias(item, newItem.categorias.map(categoria => categoria.key));
            })
        );
    }

    saveCategorias(marca: MarcaProducto, categoriasID: number[]): Observable<MarcaProducto> {
        const params = this.db.createParameter('ECOM0005', 2, { 'V3': marca.key, 'V6': categoriasID.join(',') });
        return this.db.getData(params).pipe(map(() => marca));
    }

    getByCategoria(categoriaID: number) {
        const params = this.db.createParameter('ECOM0005', 4, { 'V3': categoriaID });
        return this.db.getData(params).pipe(map(result => this.mapList(result.Table)));
    }
}
