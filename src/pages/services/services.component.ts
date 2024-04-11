import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  //   @ViewChild(MatPaginator) paginator: MatPaginator;
  //   @ViewChild(MatSort, { static: true }) sort: MatSort;
  //   @ViewChild('select') select: MatSelect;
  //   allSelected = false;
  //   dataSource = new MatTableDataSource<Book[]>();
  //   visibleColumns = [
  //     {
  //       columnDef: 'id',
  //       header: 'Id',
  //       cell: (element: any) => `${element._id}`,
  //       show: false,
  //     },
  //     {
  //       columnDef: 'Title',
  //       header: 'Name',
  //       cell: (element: any) => `${this.uppercase.transform(element.name)}`,
  //       show: true,
  //     },
  //     {
  //       columnDef: 'action',
  //       header: 'Action',
  //       cell: (element: any) =>
  //         `<button mat-raised-button color="primary">View Chapters</button>`,
  //       show: true,
  //     },
  //   ];
  //   // displayedColumnsDynamic = this.columns.map((c) => c.columnDef);
  //   get columns() {
  //     return this.visibleColumns;
  //   }
  //   get displayedColumns(): string[] {
  //     return this.visibleColumns.map((c) => c.columnDef);
  //   }
  //   constructor(private http: HttpClient, private uppercase: UpperCasePipe) {}
  //   ngOnInit() {
  //     this.http
  //       .get('https://the-one-api.dev/v2/book')
  //       .subscribe((response: any) => {
  //         this.dataSource.data = response.docs;
  //       });
  //   }
  //   ngAfterViewInit() {
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }
  //   applyFilter(filterValue: string) {
  //     filterValue = filterValue.trim();
  //     filterValue = filterValue.toLowerCase();
  //     this.dataSource.filter = filterValue;
  //   }
  //   toggleAllSelection() {
  //     if (this.allSelected) {
  //       this.select.options.forEach((item: MatOption) => item.select());
  //     } else {
  //       this.select.options.forEach((item: MatOption) => item.deselect());
  //     }
  //   }
  //   optionClick() {
  //     let newStatus = true;
  //     this.select.options.forEach((item: MatOption) => {
  //       if (!item.selected) {
  //         newStatus = false;
  //       }
  //     });
  //     this.allSelected = newStatus;
  //   }
  // }
  // export interface Book {
  //   _id: string;
  //   name: string;
  // }
}
