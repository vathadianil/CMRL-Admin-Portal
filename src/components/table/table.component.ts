import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatPaginatorModule],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  @Input() tableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.tableData.forEach(
      (data) => (data.dataSource.paginator = this.paginator)
    );
  }
}
