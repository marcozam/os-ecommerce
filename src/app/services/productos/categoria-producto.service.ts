import { Injectable } from '@angular/core';
// Models
import { CategoriaProducto } from 'app/models/productos/producto.models';
// Services
import { BaseAjaxService } from '../base-ajax.service';
import { GenericService } from '../generic.service';

@Injectable()
export class CategoriaProductoService extends GenericService<CategoriaProducto> {
    constructor(_db: BaseAjaxService) { super(_db, 403); }
    newInstance() { return new CategoriaProducto(''); }
    map2Server(value: CategoriaProducto) {
        if (value.catalogoID === 0) {
            value.catalogoID = undefined;
        }
        return super.map2Server(value);
    }
}
