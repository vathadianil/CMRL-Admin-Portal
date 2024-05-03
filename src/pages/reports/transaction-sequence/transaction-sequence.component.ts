import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { transactionsequenceInterface } from '../../../models/transaction-sequence.interface';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePickerComponent } from '../../../components/date-picker/date-picker.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { transactionsequencedata } from '../../sample';
import { transactionsequenceTableData } from '../../export-data';

@Component({
  selector: 'app-transaction-sequence',
  standalone: true,
  imports: [
    TableComponent,
    ReactiveFormsModule,
    PagetitleComponent,
    DropDownComponent,
    ButtonFieldComponent,
    MatCardModule,
    SearchComponent,
    FabButtonFieldComponent,
    CustomInputComponent,
    MatIconModule,
    MatLabel,
    MatFormField,
    DateTimePickerComponent,
    DatePickerComponent,
    FontAwesomeModule,
  ],
  providers: [provideNativeDateAdapter()],

  templateUrl: './transaction-sequence.component.html',
  styleUrl: './transaction-sequence.component.scss',
})
export class TransactionSequenceComponent implements OnInit {
  getIcon = getIcon;
  transactionsequenceReportForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];
  params: any[] = [];
  fileName = 'Transaction Sequence Number Check';
  columnsToExport = transactionsequenceTableData;
  myDateTimeControl: any;
  sortCols = [
    'stationId',
    'equipmentId',
    'transactionType',
    'transactionsequenceNumber',
    'status',
    'businessDate',
  ];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}
  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit(): void {
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.getTableData();

    this.transactionsequenceReportForm = new FormGroup({
      fromdate: new FormControl(
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
    });
  }
  getTableData() {
    let responseData = [];
    const response = transactionsequencedata;

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
        value: this.transactionsequenceReportForm.get('fromDate')?.value,
      },

      {
        key: 'transactionType',
        value: this.transactionsequenceReportForm.get('transactionType')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.transactionsequenceReportForm.value);
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
