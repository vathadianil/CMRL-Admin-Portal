import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { TableComponent } from '../../../components/table/table.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';

import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { ReconsillationReportInterface } from '../../../models/reconsillation-report.interface';

@Component({
  selector: 'app-reconsillation-report-page',
  standalone: true,
  templateUrl: './reconsillation-report-page.component.html',
  styleUrl: './reconsillation-report-page.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    PagetitleComponent,
    DateTimePickerComponent,
    DropDownComponent,
    SearchComponent,
    FabButtonFieldComponent,
    TableComponent,
    ButtonFieldComponent,
  ],
})
export class ReconsillationReportPageComponent implements OnInit {
  reconsillationForm!: FormGroup;
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  params: any[] = [];
  fileName = 'Exit Summary Report';
  columnsToExport = exitSummaryReportData;

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  reconsillationTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ReconsillationReportInterface>;
  }[] = [
    {
      displayedColumns: [
        'status',
        'transactionDate',
        'transactionId',
        'ppblTransactionType',
        'ppblPaymentMethod',
      ],

      dataSource: new MatTableDataSource<ReconsillationReportInterface>([
        {
          status: 'Express at AFC',
          transactionDate: '10-Nov-2024 11:11:11',
          transactionId: 'PSEV1243444554545',
          ppblTransactionType: 'Admin Handling',
          ppblPaymentMethod: 'STORED_VALUE',
        },

        {
          status: 'Express at AFC',
          transactionDate: '10-Nov-2024 11:11:11',
          transactionId: 'PSEV1243444554545',
          ppblTransactionType: 'Admin Handling',
          ppblPaymentMethod: 'STORED_VALUE',
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();

    this.reconsillationForm = new FormGroup({
      startDateTime: new FormControl(
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
      endDateTime: new FormControl(
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
        value: this.reconsillationForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.reconsillationForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.reconsillationForm.get('transactionType')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.reconsillationForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.reconsillationTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.reconsillationTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const exitSummaryReportData = [
  'status',
  'transactionDate',
  'transactionId',
  'ppblTransactionType',
  'ppblPaymentMethod',
];
