import { Injectable, OnDestroy } from '@angular/core';
// RxJS
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// DB Helpers
import { getFields } from 'app/modules/generic-catalogs/decorator/dynamic-catalog.decorator';
// Services
import { BaseAjaxService, ILoading } from 'app/modules/base/services/base-ajax.service';
// Models
import { BaseGenericCatalog, GenericCatalog } from 'app/modules/base//models/base.models';
import { FieldProperty } from 'app/modules/generic-catalogs/models/generic-catalogs.models';
import { MetaDataField } from 'app/modules/generic-catalogs/models/metadata-catalogs.models';

export interface GenericServiceBase<T extends BaseGenericCatalog>{
    save(item: T): Observable<T>;
    newInstance(): T;
    mapData(object: any): T;
    mapList?(objects: any[]): T[];
    map2Server?(value: T): any;
}

export interface ChangeResponse<T>{
    oldItem: T;
    newItem: T;
    response: boolean;
}

export abstract class GenericService<T extends BaseGenericCatalog> implements ILoading, OnDestroy {
    autoSort = true;
    // Check if needed
    private n_requests = 0;
    protected catalogID: number;

    loading$: Subject<boolean> = new Subject();
    private _loading = false;
    get isLoading() { return this._loading; }
    set isLoading(value) {
        if (value !== this._loading) {
            this._loading = value;
            this.loading$.next(this.isLoading);
        }
    }

    constructor(protected db: BaseAjaxService) { console.log('Service created'); }
    ngOnDestroy() { console.log('Service destroyed'); }

    // Mappings
    newInstance(): T | GenericCatalog { return new GenericCatalog(); }
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

    onError(error) {
        // Report to server
        console.log(error);
        this.finishLoading();
    }

    getByID(ID: number): Observable<T> {
        if (Number.isNaN(ID)) { console.error('ID is not a number'); }
        this.startLoading();
        return this.db.getDetailedData<T>(this.catalogID, ID).pipe(
            map((result: any) => {
                return result ? this.mapData(result) : null;
            })
        );
    }

    getList(mapData: boolean = true) {
        return this.db.getAllDataFromCatalog<any>(this.catalogID).pipe(
            map(result => mapData ? this.mapList(result) : result)
        );
    }

    delete(ID: number): Observable<T> {
        this.startLoading();
        const response = this.db.removeItem(this.catalogID, ID);
        const $sub = response.subscribe(() => {
            this.finishLoading();
            $sub.unsubscribe();
        });
        return response;
    }

    save(item: T): Observable<T> {
        return this.db.saveDynamicCatalog(this.map2Server(item), this.catalogID, item.key)
            .pipe(
                map(item => this.mapData(item))
            );
    }

    protected startLoading() { this.isLoading = ++this.n_requests > 0; }
    protected finishLoading() { this.isLoading = --this.n_requests > 0; }

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

    protected shouldSave(newItem: T, oldItem: T = null): Observable<ChangeResponse<T>> {
        const returnValue: Subject<ChangeResponse<T>> = new Subject();
        let response: ChangeResponse<T> = { newItem: newItem, oldItem: null, response: true };
        if (oldItem) {
            newItem.key = oldItem.key;
            response = this.hasChanges(newItem, oldItem);
        }
        if (newItem.key > 0 && !oldItem) {
            this.getByID(Number(newItem.key))
                .subscribe((currentItem: T) => {
                    if (currentItem) { response = this.hasChanges(newItem, currentItem); }
                    returnValue.next(response);
                });
        } else {
            setTimeout(() => returnValue.next(response), 100);
        }
        return returnValue.asObservable();
    }

    private hasChanges(newItem: T, oldItem: T): ChangeResponse<T> {
        const response: ChangeResponse<T> = { newItem: newItem, oldItem: oldItem, response: true };
        if (oldItem) { if (!oldItem.hasChanges(newItem)) { response.response = false; }}
        return response;
    }

    protected addItem(item: T) {
        const currentItem = this.getByID(item.key);
        // Check if item already exists?
        if (!currentItem) {
            /*
            const idx = localData.findIndex(it => it.key === item.key);
            localData[idx] = item;
            */
        }
    }
}

@Injectable()
export class GenericCatalogService extends GenericService<GenericCatalog> implements GenericServiceBase<GenericCatalog> {

    constructor(_db: BaseAjaxService) { super(_db); }

    setCatalogID(id: number) { this.catalogID = id; }

    fields: MetaDataField[];

    map2Server(value: GenericCatalog) {
        const fieldsMD = getFields(value);
        return fieldsMD.map(fldMD => {
                const fld =  this.fields.find((_fld) => _fld.nombreCorto === fldMD.serverField);
                return `${fld.key},${value[fldMD.propertyName]}`;
            })
            .join('~');
    }

    getByFBKey(key: string) {
        const fmd: FieldProperty = GenericCatalog.prototype['keyFB__dbData'];
        const fld =  this.fields.find((_fld) => _fld.nombreCorto === fmd.serverField);
        return this.db.getAllDataFromCatalog(this.catalogID, `${fld.key},${key}`).pipe(
            map(result => result.map(it => this.mapData(it)))
        );
    }

    save(workingItem: GenericCatalog) {
        return this.db.saveDynamicCatalog(this.map2Server(workingItem), this.catalogID, workingItem.key)
            .pipe(
                map(item => this.mapData(item))
            );
    }
}
