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
import { EntrySummaryInterface } from '../../../models/entry-summary.interface';

import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';

@Component({
  selector: 'app-entry-summary-report-page',
  standalone: true,
  templateUrl: './entry-summary-report-page.component.html',
  styleUrl: './entry-summary-report-page.component.scss',
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
    FontAwesomeModule,
  ],
})
export class EntrySummaryReportPageComponent implements OnInit {
  getIcon = getIcon;
  entrySummaryForm!: FormGroup;
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  params: any[] = [];
  equipmentData: any[] = [];
  fileName = 'Entry Summary Report';
  columnsToExport = entrySummaryReportData;
  sortCols = [
    'transactionDate',
    'stationName',
    'equipmentGroupId',
    'equipmentId',
    'cardType',
    'count',
  ];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  entrySummaryTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<EntrySummaryInterface>;
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

      dataSource: new MatTableDataSource<EntrySummaryInterface>([
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

    this.entrySummaryForm = new FormGroup({
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
        value: this.entrySummaryForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.entrySummaryForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.entrySummaryForm.get('stations')?.value,
      },
      {
        key: 'transactionType',
        value: this.entrySummaryForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.entrySummaryForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.entrySummaryForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.entrySummaryTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.entrySummaryTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const entrySummaryReportData = [
  'transactionDate',
  'stationName',
  'equipmentGroupId',
  'equipmentId',
  'cardType',
  'count',
];
