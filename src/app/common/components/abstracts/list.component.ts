import { Router, ActivatedRoute } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
// Material
import { MatTableDataSource } from '@angular/material/table';
// Models
import { IBaseCatalog } from 'models';
import { OSTableColumn } from '../../models';

export abstract class OSListComponent<T extends IBaseCatalog> {
  dataSource: MatTableDataSource<T>;
  list$: Observable<T[]>;
  tableColumns: OSTableColumn[];

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    data: Observable<T[]>
  ) {
    this.list$ = data;
    this.dataSource = new MatTableDataSource();
    this.list$.subscribe(list => this.dataSource.data = list);
  }

  onAction(event: { action: string, item: T }) {
    switch (event.action) {
      case 'edit':
      case 'new':
        this.router.navigate([`./${event ? event.item.key : 'new'}`], { relativeTo: this.route});
        break;
    }
  }
}
