import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class MarcasListResolver implements Resolve<boolean> {
    constructor(private dataManager: ProductosDataManagerService) { }
    resolve() { return this.dataManager.loadMarcas(); }
}
