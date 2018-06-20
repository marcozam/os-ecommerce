import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
// Data Manager Service
import { ProductosDataManagerService } from '../data-manager.service';
// Models
import { MarcaProducto } from 'app/models/productos';

@Injectable()
export class MarcaDetailResolver implements Resolve<Observable<MarcaProducto>> {

    constructor(private dataManager: ProductosDataManagerService) { }

    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params.marcaId;
        if (!isNaN(ID)) {
            return this.dataManager.loadMarcaByID(ID);
        }
    }
}
