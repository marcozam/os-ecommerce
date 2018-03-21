import { Injectable } from '@angular/core';

// Models
import { MarcaProducto } from '../models/producto.models';
// Services
import { BaseAjaxService } from '../../base/services/base-ajax.service';
import { GenericService, GenericServiceBase } from 'app/modules/generic-catalogs/services/generic.service';

@Injectable()
export class MarcaProductoService
    extends GenericService<MarcaProducto>
    implements GenericServiceBase<MarcaProducto> {

    constructor(_db: BaseAjaxService) {
        super(_db, 'os_marca_producto', 360);
        this.catalogID = 405;
    }

    newInstance() { return new MarcaProducto(); }
}
