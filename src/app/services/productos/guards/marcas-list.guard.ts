import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
// RxJs
import { Observable ,  of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
// Data Manager Service
import { ProductosDataManagerService } from '../data-manager.service';

@Injectable()
export class MarcasListGuard implements CanActivate {

    constructor(private dataManager: ProductosDataManagerService) { }

    canActivate(): Observable<boolean> {
        return this.dataManager.loadMarcas().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}
