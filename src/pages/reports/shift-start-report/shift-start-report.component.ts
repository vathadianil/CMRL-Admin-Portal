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
import { shiftstartTableData } from '../../export-data';
import { shiftstartData } from '../../sample';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [HttpClientModule],
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

  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();
    this.getTableData();

    this.shiftstartReportForm = new FormGroup({
      firstName: new FormControl(),
    });
  }

  getTableData() {
    let responseData = [];
    const response = shiftstartData;

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
