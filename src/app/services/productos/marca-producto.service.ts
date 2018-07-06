import { Injectable } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
// Services
import { BaseAjaxService } from '../base-ajax.service';
import { GenericService } from '../generic.service';
// Models
import { MarcaProducto } from 'app/models/productos/producto.models';

@Injectable()
export class MarcaProductoService extends GenericService<MarcaProducto> {
    constructor(_db: BaseAjaxService) { super(_db, 405); }
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
}
