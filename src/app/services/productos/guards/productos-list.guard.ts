import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot} from '@angular/router';
// RxJs
import { Observable } from 'rxjs/Observable';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// Data Manager Service
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class ProductosListGuard implements CanActivate {

    constructor(private dataManager: ProductosDataManagerService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.dataManager.loadProductosByCategoriaID(route.params.categoryId).pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}
