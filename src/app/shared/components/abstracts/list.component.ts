// RxJs
import { Observable } from 'rxjs';
// Material
import { MatTableDataSource } from '@angular/material';
// Models
import { IOSBaseCatalog, OSTableColumn } from '../../models';

export abstract class OSListComponent<T extends IOSBaseCatalog> {
    dataSource: MatTableDataSource<T>;
    list$: Observable<T[]>;
    tableColumns: OSTableColumn[];

    constructor(data: Observable<T[]>) {
        this.list$ = data;
        this.dataSource = new MatTableDataSource();
        this.list$.subscribe(list => this.dataSource.data = list);
    }
}
