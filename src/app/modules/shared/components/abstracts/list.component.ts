// RxJs
import { Observable } from 'rxjs';
// Material
import { MatTableDataSource } from '@angular/material/table';
// Models
import { BaseCatalog } from 'app/models';
import { OSTableColumn } from 'app/modules/shared';

export abstract class OSListComponent<T extends BaseCatalog> {
    dataSource: MatTableDataSource<T>;
    list$: Observable<T[]>;
    tableColumns: OSTableColumn[];

    constructor(data: Observable<T[]>) {
        this.list$ = data;
        this.dataSource = new MatTableDataSource();
        this.list$.subscribe(list => this.dataSource.data = list);
    }
}
