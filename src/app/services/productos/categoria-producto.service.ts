import { Injectable } from '@angular/core';

// Models
import { CategoriaProducto } from 'app/models/productos/producto.models';
// Services
import { BaseAjaxService } from 'app/modules/base/services/base-ajax.service';
import { GenericService, GenericServiceBase } from 'app/modules/generic-catalogs/services/generic.service';

@Injectable()
export class CategoriaProductoService extends GenericService<CategoriaProducto> implements GenericServiceBase<CategoriaProducto> {

    constructor(_db: BaseAjaxService) {
        super(_db);
        this.catalogID = 403;
    }

    newInstance() { return new CategoriaProducto(''); }

    map2Server(value: CategoriaProducto) {
        if (value.catalogoID === 0) {
            value.catalogoID = undefined;
        }
        return super.map2Server(value);
    }
}
