import {
  ChangeDetectionStrategy,
  AfterViewInit,
  EventEmitter,
  TemplateRef,
  Component,
  ViewChild,
  Output,
  Input,
} from '@angular/core';
// Angular Material
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
// Models
import { OSTableColumn, OSActions } from '../../models';
import { defaultTableActions } from '../../constants';

@Component({
  selector: 'os-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {

  @Input() columns: OSTableColumn[] = [];
  @Input() columnsTemplate: { [key: string]: TemplateRef<any> } = {};
  @Input() actions: OSActions[] = defaultTableActions;
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  @Output() actionTriggered: EventEmitter<{action: string, item: any}> = new EventEmitter();

  pageSizeOptions: number[] = [10, 25, 50];

  get tableColumns(): string[] {
    const actionColumn = this.actions.length > 0 ? ['actions'] : [];
    return [
      ...this.columns.map(col => col.uniqueID),
      ...actionColumn,
    ];
  }

  get headerActions(): OSActions[] {
    return this.actions.filter(ac => ac.inHeader);
  }

  get rowActions(): OSActions[] {
    return this.actions.filter(ac => !ac.inHeader);
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  sortChange(event: Sort) {
    console.log('sortChange', event.active);
  }

  performAction(action: string, item?: any) {
    this.actionTriggered.emit({ action, item });
  }
}
