import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// RxJs
import { throwError, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
// Services
import { AjaxGuardService } from './ajax-guard.service';
import { DialogBoxService } from 'app/services/dialog-box.service';
// Models
import { GenericCatalog } from 'app/modules/base/models/base.models';
import { AjaxRequestResult } from 'app/modules/base/models/request.models';
// Constants
import { WarningTitle, AuthErrorMessage, ErrorTitle, InternalServerErrorMessage } from 'app/modules/base/constants/messages.contants';

@Injectable({
    providedIn: 'root'
})
export class BaseAjaxService {
    online: boolean;
    private errorAlertDuration = 5000;

    constructor(private _dialog: DialogBoxService, public guard: AjaxGuardService, public snackBar: MatSnackBar) {
        this.guard.online$.subscribe((isOnline) => {
            this.online = isOnline;
            if (!isOnline) { this.openSnackBar('Se perdio la conexion a internet'); }
        });
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'Ignorar', { duration: this.errorAlertDuration });
    }

    private jsonToString(myObject) {
        let line = [];
        Object.keys(myObject).forEach(k => {
            line = line.concat([`${k}=${myObject[k]}|`]);
        });
        return line.join('').trim();
    }

    createParameter(spName: string, option: number, parameters?: any) {
        const account = { C0: 1, C3: ''};
        // JSON.parse(localStorage.getItem('CuentaActiva')),
        const user = { C0: environment.defaultUser };
        // JSON.parse(localStorage.getItem('User'));
        const paramsFields = {
            'SP': spName,
            'DBID': environment.DBID,
            'V0': option,
            'V1': (account ? account.C0 : 0),
            'V2': (user ? user.C0 : 0)
        };
        let retStr = this.jsonToString(paramsFields);
        if (parameters) { retStr += this.jsonToString(parameters); }
        return { 'Parametros': retStr };
    }

    getData(data: any): Observable<any> {
        if (!this.online || environment.production) {
            this.openDialog(ErrorTitle, 'No hay conexion');
        }
        return this.guard.getData(environment.webServiceURL, data).pipe(
                map((result: AjaxRequestResult) => {
                    switch (result.code) {
                        case 'Success':
                            return result.data;
                        case 'AuthError':
                            this.openDialog(WarningTitle, AuthErrorMessage);
                            throwError(AuthErrorMessage);
                            break;
                        // General Error
                        default:
                            this.openSnackBar(InternalServerErrorMessage);
                            throwError(result.error);
                            break;
                    }
                }),
                catchError(err => {
                    console.log(err);
                    return of(null);
                })
            );
    }

    private openDialog(title: string, message: string) {
        if (!this._dialog.isOpen) { this._dialog.openDialog(title, message); }
    }

    getDetailedData<T>(CatalogoID: number, DetailID: any): Observable<T> {
        const params = this.createParameter('DYN0001', 1, { 'V4': CatalogoID, 'V5': DetailID });
        return this.getData(params).pipe(
            map((result: any) => {
                if (result) {
                    return result.Table.length > 0 ? result.Table[0] : null;
                } else {
                    console.log('Find a way to send a no Data Warning');
                }
                return null;
            }));
    }

    getAllDataFromCatalog<T>(CatalogoID: number, options?): Observable<T[]> {
        let tOption = { where: '' };
        if (options) {
            if (typeof(options) === 'string') {
                tOption.where = 'C0,C1~' + options;
            } else {
                tOption = Object.assign(tOption, options);
                tOption.where = 'C0,C1~' + tOption.where;
            }
        }
        return this.getData(this.createParameter('DYN0001', 1, { V4: CatalogoID, V98: tOption.where }))
            .pipe(map((result: any) => result.Table));
    }

    saveDynamicCatalog(DatosCatalogo: string, CatalogoID: number, DetailID: any): Observable<any> {
        const params = this.createParameter('DYN0001', 3, { 'V4': CatalogoID, 'V5': DetailID ? DetailID : 0, 'V6': 'C0,C1,C2~' + DatosCatalogo });
        return this.getData(params).pipe(
            map((res: any) => res.Table.length >= 1 ? res.Table[0] : null)
        );
    }

    removeItem(CatalogoID: number, DetailID: any): Observable<any> {
        const params = this.createParameter('DYN0001', 5, { 'V4': CatalogoID, 'V5': DetailID });
        return this.getData(params).pipe(
            map((result: any) => result.Table)
        );
    }

    mapGeneric(r): GenericCatalog {
        const item = new GenericCatalog();
        item.key = r.C0;
        item.nombre = r.C1;
        return item;
    }
}
