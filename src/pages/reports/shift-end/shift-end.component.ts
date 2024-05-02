import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';

import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { ShiftEndDataInterface } from '../../../models/shift-end-data.interface';
import { TableComponent } from '../../../components/table/table.component';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { InputTextComponent } from '../../../components/input-text/input-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';

@Component({
  selector: 'app-shift-end',
  standalone: true,
  templateUrl: './shift-end.component.html',
  styleUrl: './shift-end.component.scss',
  imports: [
    MatCardModule,
    MatIconModule,
    PagetitleComponent,
    DropDownComponent,
    ButtonFieldComponent,
    ReactiveFormsModule,
    SearchComponent,
    FabButtonFieldComponent,
    TableComponent,
    DateTimePickerComponent,
    CustomInputComponent,
    InputTextComponent,
    FontAwesomeModule,
  ],
})
export class ShiftEndComponent implements OnInit {
  getIcon = getIcon;
  shiftEndForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];
  params: any[] = [];
  fileName = 'Shift End Report';
  columnsToExport = shiftEndReportData;
  actions = ['update'];
  sortCols = [
    'id',
    'equipmentID',
    'acquirerID',
    'opertatorID',
    'terminalID',
    'agentID',
    'shiftID',
    'businessDate',
    'shiftStartTime',
    'shiftEndTime',
  ];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  shiftEndTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ShiftEndDataInterface>;
  }[] = [
    {
      displayedColumns: [
        'id',
        'equipmentID',
        'acquirerID',
        'opertatorID',
        'terminalID',
        'agentID',
        'shiftID',
        'businessDate',
        'shiftStartTime',
        'shiftEndTime',
      ],
      dataSource: new MatTableDataSource<ShiftEndDataInterface>([
        {
          id: '1',
          equipmentID: 1006,
          acquirerID: 2,
          opertatorID: 6012,
          terminalID: '101C6',
          agentID: 1106,
          shiftID: 101370918,
          businessDate: '29-Feb-2023',
          shiftStartTime: '30-Dec-2023 09:35:29',
          shiftEndTime: '30-Dec-2023 10:35:29',
        },
        {
          id: '2',
          equipmentID: 1005,
          acquirerID: 4,
          opertatorID: 6014,
          terminalID: '101C3',
          agentID: 1105,
          shiftID: 101370919,
          businessDate: '30-Mar-2024',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '12-Oct-2023 12:35:29',
        },
        {
          id: '3',
          equipmentID: 1002,
          acquirerID: 5,
          opertatorID: 6012,
          terminalID: '101C2',
          agentID: 1104,
          shiftID: 101370919,
          businessDate: '30-Mar-2024',
          shiftStartTime: '12-Mar-2023 10:35:29',
          shiftEndTime: '15-Mar-2024 10:35:29',
        },
        {
          id: '4',
          equipmentID: 1009,
          acquirerID: 5,
          opertatorID: 6034,
          terminalID: '101C7',
          agentID: 1106,
          shiftID: 101370917,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Dec-2023 09:35:29',
          shiftEndTime: '25-Apr-2023 12:14:29',
        },
        {
          id: '5',
          equipmentID: 1002,
          acquirerID: 2,
          opertatorID: 6014,
          terminalID: '101C7',
          agentID: 1102,
          shiftID: 101370918,
          businessDate: '29-Feb-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '25-Apr-2024 12:14:29',
        },
        {
          id: '6',
          equipmentID: 1001,
          acquirerID: 2,
          opertatorID: 6024,
          terminalID: '101C7',
          agentID: 1102,
          shiftID: 101370919,
          businessDate: '16-Jan-2023',
          shiftStartTime: '25-Apr-2023 12:14:29',
          shiftEndTime: '09-May-2024 11:11:11',
        },
        {
          id: '7',
          equipmentID: 1001,
          acquirerID: 1,
          opertatorID: 6014,
          terminalID: '101C6',
          agentID: 1103,
          shiftID: 101370916,
          businessDate: '29-Feb-2023',
          shiftStartTime: '09-May-2024 11:11:11',
          shiftEndTime: '30-Dec-2023 10:35:29',
        },
        {
          id: '8',
          equipmentID: 1099,
          acquirerID: 5,
          opertatorID: 6014,
          terminalID: '101C5',
          agentID: 1106,
          shiftID: 101370916,
          businessDate: '29-Feb-2023',
          shiftStartTime: '12-Mar-2023 10:35:29',
          shiftEndTime: '09-May-2024 11:11:11',
        },
        {
          id: '9',
          equipmentID: 1010,
          acquirerID: 5,
          opertatorID: 6014,
          terminalID: '101C6',
          agentID: 1103,
          shiftID: 101370916,
          businessDate: '29-Feb-2023',
          shiftStartTime: '25-Apr-2023 12:14:29',
          shiftEndTime: '30-Dec-2023 09:35:29',
        },
        {
          id: '10',
          equipmentID: 1086,
          acquirerID: 1,
          opertatorID: 6034,
          terminalID: '101C5',
          agentID: 1106,
          shiftID: 101370916,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '25-Apr-2023 12:14:29',
        },
        {
          id: '11',
          equipmentID: 1003,
          acquirerID: 5,
          opertatorID: 6014,
          terminalID: '101C4',
          agentID: 1104,
          shiftID: 101370917,
          businessDate: '29-Feb-2023',
          shiftStartTime: '12-Mar-2023 10:35:29',
          shiftEndTime: '30-Dec-2023 09:35:29',
        },
        {
          id: '12',
          equipmentID: 1005,
          acquirerID: 4,
          opertatorID: 6012,
          terminalID: '101C7',
          agentID: 1104,
          shiftID: 101370918,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '30-Dec-2023 09:35:29',
        },
        {
          id: '13',
          equipmentID: 1034,
          acquirerID: 1,
          opertatorID: 6024,
          terminalID: '101C6',
          agentID: 1103,
          shiftID: 101370917,
          businessDate: '16-Jan-2023',
          shiftStartTime: '30-Oct-2023 12:35:29',
          shiftEndTime: '30-Dec-2023 10:35:29',
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.shiftEndForm = new FormGroup({
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
        value: this.shiftEndForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.shiftEndForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.shiftEndForm.get('stations')?.value,
      },
      {
        key: 'transactionType',
        value: this.shiftEndForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.shiftEndForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.shiftEndForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.shiftEndTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.shiftEndTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const shiftEndReportData = [
  'id',
  'equipmentID',
  'acquirerID',
  'opertatorID',
  'terminalID',
  'agentID',
  'shiftID',
  'businessDate',
  'shiftStartTime',
  'shiftEndTime',
];
