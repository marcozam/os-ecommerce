import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
// RxJs
import { Observable ,  of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
// Data Manager Service
import { ProductosDataManagerService } from '../data-manager.service';

@Injectable()
export class MarcaDetailGuard implements CanActivate {

    constructor(
        private dataManager: ProductosDataManagerService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const ID = route.params.marcaId;
        if (!isNaN(ID)) {
            return this.dataManager.loadMarcaByID(ID).pipe(
                switchMap(() => of(true)),
                catchError(() => {
                    this.router.navigate(['../']);
                    return of(false);
                })
            );
        }
        return of(ID === 'new');
    }
}
