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
import { transactionQueryData } from '../../sample';
import { transactionData } from '../../export-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';

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
    FontAwesomeModule
  ],
  providers: [HttpClientModule],
  templateUrl: './transaction-data-query.component.html',
  styleUrl: './transaction-data-query.component.scss',
})
export class TransactionDataQueryComponent implements OnInit {
  getIcon=getIcon;
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
    this.getTableData();
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

  getTableData() {
    let responseData = [];
    const response = transactionQueryData;

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
