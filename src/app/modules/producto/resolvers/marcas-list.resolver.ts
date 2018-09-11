import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class MarcasListResolver implements Resolve<void> {
    constructor(private dataManager: ProductosDataManagerService) { }
    resolve() { this.dataManager.loadMarcas().subscribe(); }
}
