// Environment
import { environment } from 'environments/environment';
// Ng
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJs
import { Observable, of } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';
// Token
import { BASE_URL } from './tokens';
// Services
import { CoreLoadingService } from '../core-handlers';
// Utils
import { GUID_GENERATOR } from 'core/utils';
// Models
import { GenericCatalog } from 'app/common';
import { AjaxRequestResult } from '../models';
import { AJAX_RESULT_CODE } from '../enums';

@Injectable({ providedIn: 'root' })
export class BaseHttpService {
    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: HttpClient,
        private loadingService: CoreLoadingService
    ) { }

    private encodeObject(obj): string {
        let str = [];
        Object.keys(obj).forEach(p => str = str.concat([`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`]));
        return str.join('&');
    }

    private jsonToString(myObject) {
        let line = [];
        Object.keys(myObject).forEach(k => line = line.concat([`${k}=${myObject[k]}|`]));
        return line.join('').trim();
    }


    private post(data: any): Observable<AjaxRequestResult> {
        const requestId = GUID_GENERATOR();
        this.loadingService.startRequest(requestId);

        const post = this.http.post(this.baseUrl, this.encodeObject(data), {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        }).pipe(
            finalize(() => this.loadingService.endRequest(requestId)),
            map((result: any) => new AjaxRequestResult(result.Auth ? AJAX_RESULT_CODE.authError : AJAX_RESULT_CODE.success, result)),
            catchError(error => of(new AjaxRequestResult(AJAX_RESULT_CODE.error, error)))
        );
        return post;
    }

    mapGeneric(r): GenericCatalog {
        const item = new GenericCatalog();
        item.key = r.C0;
        item.nombre = r.C1;
        return item;
    }

    getData(data: { Parametros: string }): Observable<any> {
        return this.post(data).pipe(
            map((result: AjaxRequestResult) => {
                switch (result.code) {
                    case AJAX_RESULT_CODE.success:
                        return result.data;
                }
            })
        );
    }

    createParameter(spName: string, option: number, parameters?: any): { Parametros: string } {
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
        return { Parametros: retStr };
    }
}
