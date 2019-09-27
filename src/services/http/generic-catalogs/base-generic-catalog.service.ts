import { OnDestroy } from '@angular/core';
// RxJs
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// Core
import { getFields } from 'core/decorators';
// DB Helpers
import { IBaseCatalog, BaseCatalog } from 'models';
// Services
import { GenericCatalogService } from './generic-catalog.service';

export interface IBaseGenericCatalogService<T extends IBaseCatalog> {
    autoSort: Boolean;
    newInstance(): T;
    // Mappings
    mapData(object: any): T;
    mapList?(objects: any[]): T[];
    map2Server?(value: T): any;
    // Data Management
    getList(): Observable<T[]>;
    getByID(key: number): Observable<T>;
    delete(key: number): Observable<T>;
    save(newItem: T, oldItem?: T): Observable<T>;
}

export abstract class BaseGenericCatalogService<T extends IBaseCatalog>
    implements OnDestroy, IBaseGenericCatalogService<T> {

    constructor(
        protected db: GenericCatalogService,
        protected catalogID,
        public autoSort = true) { }

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
        // Made sure we get fields
        const fieldsMD = getFields(this.newInstance());
        return fieldsMD.map(fld => {
            const _value = fld.converter(value[fld.propertyName]);
            return `${fld.key},${_value}`;
         }).join('~');
    }

    // Data Management
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

    delete(key: number): Observable<T> { return this.db.removeItem(this.catalogID, key); }

    save(newItem: T, oldItem: T): Observable<T> {
        if (oldItem.hasChanges(newItem)) {
            return this.db.saveDynamicCatalog(this.map2Server(newItem), this.catalogID, newItem.key)
                .pipe(map(item => this.mapData(item)));
        } else {
            return of(newItem);
        }
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

    protected mapGenericData<T extends BaseCatalog>(item: T, data: any): T {
        if (data) {
            if (data.C0) { item.key = data.C0; }
            const fieldsMD = getFields(item);
            fieldsMD.forEach(fld => item[fld.propertyName] = data[fld.serverField]);
        }
        return item;
    }
}
