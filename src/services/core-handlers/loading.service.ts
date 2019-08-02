// Ng
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoreLoadingService {

    private _requestIds = [];

    constructor() { }

    startRequest(id: string) {
        this._requestIds = [ ...this._requestIds, id ];
    }

    endRequest(id: string) {
        this._requestIds = this._requestIds.filter(rid => rid !== id);
    }
}
