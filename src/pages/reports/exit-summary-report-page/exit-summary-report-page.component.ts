import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { CommonService } from '../../../services/common.service';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { TableComponent } from '../../../components/table/table.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { SearchComponent } from '../../../components/search/search.component';
import { ExitSummaryInterface } from '../../../models/exit-summary.interface';

import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';

@Component({
  selector: 'app-exit-summary-report-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    PagetitleComponent,
    ReactiveFormsModule,
    DropDownComponent,
    ButtonFieldComponent,
    DateTimePickerComponent,
    TableComponent,
    FabButtonFieldComponent,
    SearchComponent,
  ],
  templateUrl: './exit-summary-report-page.component.html',
  styleUrl: './exit-summary-report-page.component.scss',
})
export class ExitSummaryReportPageComponent implements OnInit {
  exitSummaryForm!: FormGroup;
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  equipmentData: any[] = [];
  params: any[] = [];
  fileName = 'Exit Summary Report';
  columnsToExport = exitSummaryReportData;

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  exitSummaryTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ExitSummaryInterface>;
  }[] = [
    {
      displayedColumns: [
        'transactionDate',
        'stationName',
        'equipmentGroupId',
        'equipmentId',
        'cardType',
        'count',
      ],

      dataSource: new MatTableDataSource<ExitSummaryInterface>([
        {
          transactionDate: '13 feb 2024',
          stationName: '0101 miyapur',
          equipmentGroupId: 4,
          equipmentId: 4002,
          cardType: 1,
          count: 2,
        },

        {
          transactionDate: '13 feb 2024',
          stationName: '0102 nagole',
          equipmentGroupId: 4,
          equipmentId: 4002,
          cardType: 2,
          count: 2,
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();

    this.equipmentData = this.commonService.getEquipments();

    this.exitSummaryForm = new FormGroup({
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
        value: this.exitSummaryForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.exitSummaryForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.exitSummaryForm.get('transactionType')?.value,
      },
      {
        key: 'transactionType',
        value: this.exitSummaryForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.exitSummaryForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.exitSummaryForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.exitSummaryTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.exitSummaryTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const exitSummaryReportData = [
  'transactionDate',
  'stationName',
  'equipmentGroupId',
  'equipmentId',
  'cardType',
  'count',
];
