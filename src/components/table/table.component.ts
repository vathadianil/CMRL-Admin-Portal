import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../util/font-awesome-icons';
@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule,
  ],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() tableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[];
  @Input() actions: string[] = [];
  @Input() sortCols: string[] = [];
  @Output() onActionClick = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() displaySecondRowColumns: string[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  actionColWidth = '';
  getIcon = getIcon;
  icon: any;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  ngOnInit() {
    // if (this.actions?.length)
    //   this.actionColWidth = `${this.actions?.length * 60}px`;
  }
  ngAfterViewInit() {
    this.tableData.forEach((data) => {
      data.dataSource.sort = this.sort;
      data.dataSource.paginator = this.paginator;
    });
  }

  editItem(element: any): void {
    const data = {
      action: 'update',
      value: element,
    };
    this.onActionClick.emit(data);
  }

  deleteItem(element: any): void {
    const data = {
      action: 'delete',
      value: element,
    };
    this.onActionClick.emit(data);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getStatusStyle(status: string) {
    return status === 'In-Active' ? { color: 'red' } : { color: 'green' };
  }
}
