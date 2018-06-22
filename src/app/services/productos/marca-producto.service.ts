import { Injectable } from '@angular/core';
// Services
import { BaseAjaxService } from '../base-ajax.service';
import { GenericService } from '../generic.service';
// Models
import { MarcaProducto } from 'app/models/productos/producto.models';

@Injectable()
export class MarcaProductoService extends GenericService<MarcaProducto> {
    constructor(_db: BaseAjaxService) { super(_db, 405); }
    newInstance() { return new MarcaProducto(); }
}
