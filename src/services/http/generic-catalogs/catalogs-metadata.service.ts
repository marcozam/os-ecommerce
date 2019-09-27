import { Injectable } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Services
import { BaseGenericCatalogService } from './base-generic-catalog.service';
import { GenericCatalogService } from './generic-catalog.service';
// Models
import {
  MetaDataCatalog,
  MetaDataField,
  MetaDataTable,
  MetaDataColumn,
  MetaDataFieldType
} from 'models/generic-catalogs';

@Injectable()
export class CatalogsMetadataService extends BaseGenericCatalogService<MetaDataCatalog> {

  private fieldsCatalogID = 104;
  private fieldFilterID = 10404;

  constructor(_db: GenericCatalogService) { super(_db, 100); }

  save(item: MetaDataCatalog) {
    let idx = 0;
    const _table = [];
    _table.push('C0,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11');
    item.fields.forEach(it => {
      const row = [];
      row.push( it.isNew ? 0 : it.key, it.nombre, it.nombreCorto, it.tipoCampoID, 0, '', it.required, idx++, it.visible, it.fieldName, 0, 0);
      _table.push(row.join(','));
    });

    const d2s = {
      V4: item.key,
      V5: item.nombre,
      V6: item.detailURL,
      V7: item.dynamic ? '1' : '0',
      V8: item.tableName ? item.tableName : '',
      V9: item.listURL,
      V21: _table.join('&')
    };
    const params = this.db.createParameter('DYN0000', 4, d2s);
    return this.db.getData(params);
  }

  newInstance() { return new MetaDataCatalog(); }

  mapFieldTypeData(r: any): MetaDataFieldType {
    return this.mapGenericData(new MetaDataFieldType(), r);
  }

  mapFieldsData(r: any): MetaDataField {
    const item = this.mapGenericData(new MetaDataField(), r);
    item.isNew = false;
    return item;
  }

  mapTablesData(r: any): MetaDataTable {
    return this.mapGenericData(new MetaDataTable(), r);
  }

  mapColumnData(r: any): MetaDataColumn {
    const item = this.mapGenericData(new MetaDataColumn(), r);
    item.isNullable = r.C4 === 'NO' ? false : true;
    return item;
  }

  getFieldsList(catalogID: number): Observable<MetaDataField[]> {
    return this.db.getAllDataFromCatalog(this.fieldsCatalogID, `${this.fieldFilterID},${catalogID}`)
      .pipe(map(result => result.map(it => this.mapFieldsData(it))));
  }

  getDBTables(): Observable<MetaDataTable[]> {
    return this.db.getData(this.db.createParameter('DYN0003', 1))
      .pipe(map(result => result.Table.map(it => this.mapTablesData(it))));
  }

  getDBColumns(tableName: string): Observable<MetaDataColumn[]> {
    return this.db.getData(this.db.createParameter('DYN0003', 2, { V3: tableName}))
      .pipe(map(result => result.Table.map(it => this.mapColumnData(it))));
  }

  getFieldTypes(): Observable<MetaDataFieldType[]> {
    return this.db.getData(this.db.createParameter('DYN0000', 1))
      .pipe(map(result => result.Table.map(it => this.mapFieldTypeData(it))));
  }
}
