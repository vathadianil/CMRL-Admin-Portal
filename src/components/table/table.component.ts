import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  transId: string;
  transType: string;
  lineId: string;
  stationId: string;
  equipmentGroupId: string;
  equipId: string;
  acquirerId: string;
  operatorId: string;
  terminalId: string;
  // panSha: string;
  // serviceType: string;
  // tomShiftId: string;
  // paytmTid: string;
  // paytmMid: string;
  // bussinessDate: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatPaginatorModule],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  tableData = [
    {
      displayedColumns: [
        'transId',
        'transType',
        'lineId',
        'stationId',
        'equipmentGroupId',
        'equipId',
        'acquirerId',
        'operatorId',
        'terminalId',
      ],
      dataSource: new MatTableDataSource<PeriodicElement>(ELEMENT_DATA),
    },
    // Add more table data objects as needed
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.tableData.forEach(
      (data) => (data.dataSource.paginator = this.paginator)
    );
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    transId: '764566834220230824025339',
    transType: '03',
    lineId: '0303-Stadium',
    stationId: '3',
    equipmentGroupId: '1143',
    equipId: '4',
    acquirerId: '6014',
    operatorId: '3030C2',
    terminalId: '3030C2',
  },
  {
    transId: '764566834220230824025339',
    transType: '03',
    lineId: '0303-Stadium',
    stationId: '3',
    equipmentGroupId: '1143',
    equipId: '4',
    acquirerId: '6014',
    operatorId: '3030C2',
    terminalId: '3030C2',
  },
];
