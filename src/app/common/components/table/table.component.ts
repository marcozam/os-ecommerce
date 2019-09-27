import {
  ChangeDetectionStrategy,
  AfterViewInit,
  EventEmitter,
  Component,
  ViewChild,
  Input,
  Output
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// Models
import { OSTableColumn, OSTableActions } from '../../models';
import { defaultTableActions } from '../../constants';

@Component({
  selector: 'os-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit {

  @Input() columns: OSTableColumn[];
  @Input() actions: OSTableActions[] = defaultTableActions;
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  @Output() actionTriggered: EventEmitter<{action: string, item: any}> = new EventEmitter();

  pageSizeOptions: number[] = [10, 25, 50];

  get tableColumns(): string[] {
    return [ ...this.columns.map(col => col.uniqueID), 'actions' ];
  }

  get headerActions(): OSTableActions[] {
    return this.actions.filter(ac => ac.inHeader);
  }

  get rowActions(): OSTableActions[] {
    return this.actions.filter(ac => !ac.inHeader);
  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  performAction(action: string, item?: any) {
    this.actionTriggered.emit({ action, item });
  }
}
