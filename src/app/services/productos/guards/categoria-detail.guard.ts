import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot} from '@angular/router';
// RxJs
import { Observable } from 'rxjs/Observable';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
// Data Manager Service
import { ProductosDataManagerService } from './data-manager.service';

@Injectable()
export class CategoriaDetailGuard implements CanActivate {

    constructor(private dataManager: ProductosDataManagerService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const ID = route.params.categoryId;
        if (!isNaN(ID)) {
            return this.dataManager.loadCategoriaByID(ID).pipe(
                switchMap(() => of(true)),
                catchError(() => of(false))
            );
        }
        return of(ID === 'new');
    }
}
