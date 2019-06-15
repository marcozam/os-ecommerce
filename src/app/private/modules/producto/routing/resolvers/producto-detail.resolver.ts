import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ProductosDataManagerService } from './data-manager.service';
import { PRODUCTOS_ROUTE_STATE_PARAMS } from '../../constants';

@Injectable()
export class ProductosDetailResolver implements Resolve<void> {
    constructor(private dataManager: ProductosDataManagerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params[PRODUCTOS_ROUTE_STATE_PARAMS.PRODUCTO_ID];
        if (!isNaN(ID)) { this.dataManager.loadProductoByID(ID).subscribe(); }
    }
}
