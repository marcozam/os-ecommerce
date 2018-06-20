import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJs
import { Observable, fromEvent ,  of ,  merge } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AjaxRequestResult } from 'app/modules/base/models/request.models';

const queuedConnections: Observable<Object>[] = [];

@Injectable()
export class AjaxGuardService {
    online$: Observable<boolean>;

    constructor(private _http: HttpClient) {
        // Check if Browser is online
        this.online$ = merge(
            of(navigator.onLine),
            fromEvent(window, 'online').pipe(map(() => true)),
            fromEvent(window, 'offline').pipe(map(() => false))
        );
    }

    private encodeObject(obj) {
        let str = [];
        // tslint:disable-next-line:forin
        Object.keys(obj).forEach(p => {
            str = str.concat([`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`]);
        });
        return str.join('&');
    }

    getData(url: string, data: any) {
        const post = this._http.post(url, this.encodeObject(data), {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            }).pipe(
                map((result: any) => new AjaxRequestResult(result.Auth ? 'AuthError' : 'Success', result)),
                catchError(error => of(new AjaxRequestResult('GeneralError', error)))
            );
        // Execute on complete
        /*
        response.subscribe(() => {
            const index = queuedConnections.indexOf(post);
            if (index > -1) { queuedConnections.splice(index, 1); }
        });
        */

        queuedConnections.push(post);
        return post;
    }
}
