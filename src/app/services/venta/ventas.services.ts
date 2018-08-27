import { Injectable } from '@angular/core';
// RxJs
// import { map } from 'rxjs/operators';
// Services
import { BaseAjaxService } from '../base-ajax.service';
import { GenericService } from '../generic.service';
// Models
import { Producto } from 'app/models/productos/producto.models';

@Injectable()
export class VentaService extends GenericService<Venta> {
    constructor(db: BaseAjaxService) { super(db, 402); }

}
