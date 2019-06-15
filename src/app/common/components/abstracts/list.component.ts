// RxJs
import { Observable } from 'rxjs';
// Material
import { MatTableDataSource } from '@angular/material/table';
// Models
import { IBaseCatalog, OSTableColumn } from '../../models';

export abstract class OSListComponent<T extends IBaseCatalog> {
    dataSource: MatTableDataSource<T>;
    list$: Observable<T[]>;
    tableColumns: OSTableColumn[];

    constructor(data: Observable<T[]>) {
        this.list$ = data;
        this.dataSource = new MatTableDataSource();
        this.list$.subscribe(list => this.dataSource.data = list);
    } 
}
