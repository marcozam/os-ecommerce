
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// Material
import { MatTableDataSource } from '@angular/material/table';
// Models
import { OSTableColumn } from '../../models';
import { OSBaseDestroyComponent } from 'app/common-forms/components';

export abstract class OSListComponent<T> extends OSBaseDestroyComponent implements OnInit {
  dataSource: MatTableDataSource<T>;
  list$: Observable<T[]>;
  tableColumns: OSTableColumn[];
  keyColumn = 'key';

  constructor(
    protected router?: Router,
    protected route?: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    if (this.list$) {
      this.startListening();
    }
  }

  startListening() {
    if (!this.list$) {
      throw new Error('Data Observable has not being initialized');
    }
    this.list$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe(list => this.dataSource.data = list);
  }

  onAction(event: { action: string, item: T }) {
    switch (event.action) {
      case 'edit':
      case 'new':
        if (this.router) {
          this.router.navigate([`./${event ? event.item[this.keyColumn] : 'new'}`], { relativeTo: this.route});
        }
        break;
    }
  }
}
