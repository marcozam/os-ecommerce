import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class CategoriasListResolver implements Resolve<void> {
    constructor(private dataManager: ProductosDataManagerService) { }
    resolve() { this.dataManager.loadCategorias().subscribe(); }
}
