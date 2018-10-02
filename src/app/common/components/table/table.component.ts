import { Component, Input, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// Models
import { OSTableColumn } from '../../models';

@Component({
  selector: 'os-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {
  @Input() columns: OSTableColumn[];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  pageSizeOptions: number[] = [10, 25, 50];

  get tableColumns(): string[] {
    return [ ...this.columns.map(col => col.uniqueID), 'actions' ];
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
