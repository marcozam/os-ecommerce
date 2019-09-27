import { Injectable } from '@angular/core';
import { MetodoPago } from 'app/modules/venta/models/venta.models';
import { BaseAjaxService } from '../../base/services/base-ajax.service';
import { GenericService, GenericServiceBase } from '../../../../services/http/generic-catalogs/generic.service';

@Injectable()
export class MetodosPagoService extends GenericService<MetodoPago> implements GenericServiceBase<MetodoPago> {

    constructor(_db: BaseAjaxService) {
        super(_db);
        this.catalogID = 304;
        this.autoSort = false;
    }

    newInstance(): MetodoPago { return new MetodoPago(); }
}
