import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ProductosDataManagerService } from './data-manager.service';
import { PRODUCTOS_ROUTE_STATE_PARAMS } from '../../constants';
// Models
import { CategoriaProducto } from 'models';

@Injectable()
export class ProductosListResolver implements Resolve<CategoriaProducto> {
    constructor(private dataManager: ProductosDataManagerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params[PRODUCTOS_ROUTE_STATE_PARAMS.CATEGORIA_ID];
        if (!isNaN(ID)) {
            return this.dataManager.loadProductosByCategoriaID(ID);
        } else {
            // TODO: Redirecto to list
        }
    }
}
