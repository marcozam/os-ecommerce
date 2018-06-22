import { OnDestroy } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// DB Helpers
import { getFields } from 'app/helpers/decorators/dynamic-catalog.decorator';
// Services
import { BaseAjaxService } from './base-ajax.service';
// Models
import { BaseGenericCatalog } from 'app/modules/base//models/base.models';

export interface GenericServiceBase<T extends BaseGenericCatalog> {
    autoSort: Boolean;
    save(item: T): Observable<T>;
    newInstance(): T;
    mapData(object: any): T;
    mapList?(objects: any[]): T[];
    map2Server?(value: T): any;
}

export abstract class GenericService<T extends BaseGenericCatalog> implements OnDestroy, GenericServiceBase<T> {
    constructor(protected db: BaseAjaxService, protected catalogID, public autoSort = true) {
        console.log('NGRX Service CREATED');
    }

    ngOnDestroy() { console.log('NGRX Service DESTROYED'); }

    // MAPPINGS
    newInstance(): T { return null; }
    mapData(data: any): T { return this.mapGenericData(this.newInstance(), data); }
    mapList(list: any[]): T[] {
        let respond = list.map(p => this.mapData(p));
        if (this.autoSort) { respond = this.baseSort(respond); }
        return respond;
    }
    map2Server(value: T) {
        const fieldsMD = getFields(value);
        return fieldsMD.map(fld => `${fld.key},${value[fld.propertyName]}` ).join('~');
    }

    // POST Data
    getByID(ID: number): Observable<T> {
        if (Number.isNaN(ID)) { console.error('ID is not a number'); }
        return this.db.getDetailedData<T>(this.catalogID, ID)
            .pipe(map((result: any) => {
                return result ? this.mapData(result) : null;
            })
        );
    }
    getList(mapData: boolean = true) {
        return this.db.getAllDataFromCatalog<any>(this.catalogID)
            .pipe(map(result => mapData ? this.mapList(result) : result));
    }
    delete(ID: number): Observable<T> { return this.db.removeItem(this.catalogID, ID); }
    save(item: T): Observable<T> {
        return this.db.saveDynamicCatalog(this.map2Server(item), this.catalogID, item.key)
            .pipe(map(item => this.mapData(item)));
    }

    // UTILITIES
    protected baseSort(list: T[]): T[] {
        return list.sort((v1, v2) => {
            if (v1.hasOwnProperty('nombre')) {
                if (v1['nombre'] < v2['nombre']) { return -1; }
                if (v1['nombre'] > v2['nombre']) { return 1; }
            }
            return 0;
        });
    }

    protected mapGenericData(item: any, data: any) {
        if (data) {
            if (data.C0) { item.key = data.C0; }
            const fieldsMD = getFields(item);
            fieldsMD.forEach(fld => item[fld.propertyName] = data[fld.serverField]);
        }
        return item;
    }
}
