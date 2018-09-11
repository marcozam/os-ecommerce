import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class MarcaDetailResolver implements Resolve<void> {
    constructor(private dataManager: ProductosDataManagerService) { }
    resolve(route: ActivatedRouteSnapshot) {
        const ID = route.params.marcaId;
        if (!isNaN(ID)) { this.dataManager.loadMarcaByID(ID).subscribe(); }
    }
}
