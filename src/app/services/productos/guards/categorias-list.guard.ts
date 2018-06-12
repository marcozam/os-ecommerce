import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
// RxJs
import { Observable } from 'rxjs/Observable';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// Data Manager Service
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class CategoriasListGuard implements CanActivate {

    constructor(private dataManager: ProductosDataManagerService) { }

    canActivate(): Observable<boolean> {
        return this.dataManager.loadCategorias().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}
