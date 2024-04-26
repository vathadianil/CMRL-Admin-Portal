import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';
import { MatIconModule } from '@angular/material/icon';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { HttpService } from '../../../services/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transaction-data-query',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    TableComponent,
    PagetitleComponent,
    DropDownComponent,
    ButtonFieldComponent,
    MatCardModule,
    SearchComponent,
    FabButtonFieldComponent,
    MatIconModule,
    DateTimePickerComponent,
  ],
  providers: [HttpClientModule],
  templateUrl: './transaction-data-query.component.html',
  styleUrl: './transaction-data-query.component.scss',
})
export class TransactionDataQueryComponent implements OnInit {
  transReportForm!: FormGroup;
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  transactionTypeData: any[] = [];
  equipmentData: any[] = [];
  fileName = 'Transaction Data Query';
  columnsToExport = transactionData;
  params: any[] = [];
  sortCols = [
    'transactionDateTime',
    'transId',
    'transType',
    'lineId',
    'stationId',
    'equipmentGroupId',
    'equipId',
    'acquirerId',
    'operatorId',
    'terminalId',
    'panSha',
    'serviceType',
    'tomEfoShiftId',
    'paytmTid',
    'paytmMid',
    'bussinessDate',
    'status',
  ];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService,
    private httpService: HttpService
  ) {}

  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit() {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    let responseData = [];
    response.data.map((item) => {
      let dataList = {};
      response.headers.map((header) => {
        dataList = { ...dataList, [header.label]: item[header.key] };
      });
      responseData.push(dataList);
    });

    this.sortCols = response.headers.map((header: any) => header.label);
    this.myTableData = [
      {
        displayedColumns: response.headers.map((header: any) => header.label),
        dataSource: new MatTableDataSource<any>(responseData),
      },
    ];

    this.transReportForm = new FormGroup({
      fromDate: new FormControl(
        {
          value: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate(),
            0,
            0,
            0
          ),
          disabled: false,
        },
        Validators.required
      ),
      toDate: new FormControl(
        {
          value: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate(),
            23,
            59,
            59
          ),
          disabled: false,
        },
        Validators.required
      ),
    });
  }

  getParameters() {
    this.params = [
      {
        key: 'fromDate',
        value: this.transReportForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.transReportForm.get('toDate')?.value,
      },
      {
        key: 'stationName',
        value: this.transReportForm.get('stationName')?.value,
      },
      {
        key: 'transactionType',
        value: this.transReportForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.transReportForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }
  onSubmit() {
    console.log(this.transReportForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.myTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.myTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

const response = {
  headers: [
    { key: 'transactionDateTime', label: 'Transaction Date Time' },
    { key: 'transId', label: 'Transaction ID' },
    { key: 'transType', label: 'Transaction Type' },
    { key: 'lineId', label: 'Line ID' },
    { key: 'stationId', label: 'Station ID' },
    { key: 'equipmentGroupId', label: 'Equipment Group ID' },
    { key: 'equipId', label: 'Equipment ID' },
    { key: 'acquirerId', label: 'Acquirer ID' },
    { key: 'operatorId', label: 'Operator ID' },
    { key: 'terminalId', label: 'Terminal ID' },
    { key: 'panSha', label: 'Pan Sha' },
    { key: 'serviceType', label: 'Service Type' },
    { key: 'tomEfoShiftId', label: 'Tom Efo Shift ID' },
    { key: 'paytmTid', label: 'Paytm TID' },
    { key: 'paytmMid', label: 'Paytm MID' },
    { key: 'bussinessDate', label: 'Business Date' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      transactionDateTime: '03-Feb-2611 06:50:25',
      transId: '764566834220230824025339',
      transType: '03',
      lineId: '0303-Stadium',
      stationId: '3',
      equipmentGroupId: '1143',
      equipId: '4',
      acquirerId: '6014',
      operatorId: '3030C2',
      terminalId: '3030C2',
      panSha: '••••••••••••1788',
      serviceType: '1',
      tomEfoShiftId: '0303354555',
      paytmTid: '11075316',
      paytmMid: 'LTMetr33790038971459',
      bussinessDate: '24-Aug-2023',
      status: 'active',
    },
    {
      transactionDateTime: '03-Feb-2611 06:50:25',
      transId: '764566834220230824025349',
      transType: '04',
      lineId: '0303-Stadium',
      stationId: '3',
      equipmentGroupId: '1145',
      equipId: '2',
      acquirerId: '6013',
      operatorId: '3030C2',
      terminalId: '3030C2',
      panSha: '••••••••••••1788',
      serviceType: '1',
      tomEfoShiftId: '0303354556',
      paytmTid: '11075316',
      paytmMid: 'LTMetr33790038971459',
      bussinessDate: '23-Aug-2023',
      status: 'in-active',
    },
  ],
};

export const transactionData = [
  'Transaction Date Time',
  'Transaction ID',
  'Transaction Type',
  'Line ID',
  'Station ID',
  'Equipment Group ID',
  'Equipment ID',
  'Acquirer ID',
  'Operator ID',
  'Terminal ID',
  'Pan Sha',
  'Service Type',
  'Tom Efo Shift ID',
  'Paytm TID',
  'Paytm MID',
  'Business Date',
  'Status',
];
