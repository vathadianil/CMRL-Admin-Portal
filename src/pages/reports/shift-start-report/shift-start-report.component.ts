import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../../services/common.service';
import { ShiftStartdatainterface } from '../../../models/shift-start-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputTextComponent } from '../../../components/input-text/input-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';

@Component({
  selector: 'app-shift-start-report',
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
    CustomInputComponent,
    MatIconModule,
    MatLabel,
    MatFormFieldModule,
    InputTextComponent,
    FontAwesomeModule,
  ],
  templateUrl: './shift-start-report.component.html',
  styleUrl: './shift-start-report.component.scss',
})
export class ShiftStartReportComponent implements OnInit {
  getIcon = getIcon;
  shiftstartReportForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];
  fileName = 'Shift Start Report';
  columnsToExport = shiftstartTableData;
  params: any[] = [];
  sortCols = [
    'shift_start_date_time',
    'lineId',
    'stationId',
    'equipmentGroupId',
    'equepmentId',
    'acquirerId',
    'operatorId',
    'terminalId',
    'agentId',
    'tom_Efo_Shift_start',
  ];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  shiftstartTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ShiftStartdatainterface>;
  }[] = [
    {
      displayedColumns: [
        'shift_start_date_time',
        'lineId',
        'stationId',
        'equipmentGroupId',
        'equepmentId',
        'acquirerId',
        'operatorId',
        'terminalId',
        'agentId',
        'tom_Efo_Shift_start',
      ],
      dataSource: new MatTableDataSource<ShiftStartdatainterface>([
        {
          shift_start_date_time: '30-Mar-2020 10:35:29',
          lineId: '01',
          stationId: '0106-Moosapet',
          equipmentGroupId: 3,
          equepmentId: 1002,
          acquirerId: 4,
          operatorId: 6014,
          terminalId: '1010C2',
          agentId: 11102,
          tom_Efo_Shift_start: '0101',
        },
        {
          shift_start_date_time: '30-Mar-2020 10:35:29',
          lineId: '01',
          stationId: '0106-Moosapet',
          equipmentGroupId: 3,
          equepmentId: 1002,
          acquirerId: 4,
          operatorId: 6014,
          terminalId: '1010C2',
          agentId: 1102,
          tom_Efo_Shift_start: '0101',
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.shiftstartReportForm = new FormGroup({
      firstName: new FormControl(),
    });
  }
  getParameters() {
    this.params = [
      {
        key: 'fromDate',
        value: this.shiftstartReportForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.shiftstartReportForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.shiftstartReportForm.get('transactionType')?.value,
      },
      {
        key: 'transactionType',
        value: this.shiftstartReportForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.shiftstartReportForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }
  onSubmit() {
    console.log(this.shiftstartReportForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.shiftstartTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.shiftstartTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const shiftstartTableData = [
  'shift_start_date_time',
  'lineId',
  'stationId',
  'equipmentGroupId',
  'equepmentId',
  'acquirerId',
  'operatorId',
  'terminalId',
  'agentId',
  'tom_Efo_Shift_start',
];
