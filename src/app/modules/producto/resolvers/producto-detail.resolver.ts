import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class ProductosDetailResolver implements Resolve<void> {
    constructor(private dataManager: ProductosDataManagerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params.productoId;
        if (!isNaN(ID)) {
            this.dataManager.loadProductoByID(ID).subscribe();
        }
    }
}
