// Ng
import { Injectable } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Services
import { BaseHttpService } from '../base-http.service';

@Injectable({ providedIn: 'root' })
export class GenericCatalogService {

    constructor(private db: BaseHttpService) { }

    createParameter(spName: string, option: number, parameters?: any) {
        return this.db.createParameter(spName, option, parameters);
    }

    getData(data) { return this.db.getData(data); }

    getDetailedData<T>(CatalogoID: number, DetailID: any): Observable<T> {
        const params = this.db.createParameter('DYN0001', 1, { 'V4': CatalogoID, 'V5': DetailID });
        return this.db.getData(params).pipe(
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
        return this.db.getData(this.db.createParameter('DYN0001', 1, { V4: CatalogoID, V98: tOption.where }))
            .pipe(map((result: any) => result.Table));
    }

    saveDynamicCatalog(DatosCatalogo: string, CatalogoID: number, DetailID: any): Observable<any> {
        const params = this.db.createParameter('DYN0001', 3, { 'V4': CatalogoID, 'V5': DetailID ? DetailID : 0, 'V6': 'C0,C1,C2~' + DatosCatalogo });
        return this.db.getData(params).pipe(
            map((res: any) => res.Table.length >= 1 ? res.Table[0] : null)
        );
    }

    removeItem(CatalogoID: number, DetailID: any): Observable<any> {
        const params = this.db.createParameter('DYN0001', 5, { 'V4': CatalogoID, 'V5': DetailID });
        return this.db.getData(params).pipe(
            map((result: any) => result.Table)
        );
    }
}
