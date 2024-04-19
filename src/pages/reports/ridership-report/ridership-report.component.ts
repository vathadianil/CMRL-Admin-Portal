import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { ridershipreportInterface } from '../../../models/ridership-report-interface';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';

@Component({
  selector: 'app-ridership-report',
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
    DateTimePickerComponent 
  ],
  templateUrl: './ridership-report.component.html',
  styleUrl: './ridership-report.component.scss'
})
export class RidershipReportComponent {
  ridershipReportForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];
  fileName = 'RiderShip Report';
  columnsToExport =ridershipTableData;
  params: any[] = [];

  constructor(private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService) {}

  ridershipTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ridershipreportInterface>;
  }[] = [
    {
      displayedColumns: [
        'stationId',
        'stationName',
        'entryCount',
        'exitCount',
      ],
      dataSource: new MatTableDataSource<ridershipreportInterface>([
        {
          stationId:'0101',
          stationName:'miyapur',
          entryCount:0,
          exitCount:0,
        },  
       
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.ridershipReportForm = new FormGroup({
      
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
      todate: new FormControl(
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
  onSubmit() {
    console.log(this.ridershipReportForm.value);
  }

getParameters() {
  this.params = [
    {
      key: 'fromDate',
      value: this.ridershipReportForm.get('fromDate')?.value,
    },
    {
      key: 'toDate',
      value: this.ridershipReportForm.get('toDate')?.value,
    },
    {
      key: 'stations',
      value: this.ridershipReportForm.get('transactionType')?.value,
    },
    {
      key: 'transactionType',
      value: this.ridershipReportForm.get('transactionType')?.value,
    },
    {
      key: 'equipmentName',
      value: this.ridershipReportForm.get('equipmentName')?.value,
    },
  ];
  return this.params;
}

onExcelClicked() {
  this.exportService.exportToExcel(
    this.ridershipTableData[0].dataSource.data,
    this.fileName,
    this.columnsToExport,
    this.getParameters()
  );
}

onPdfClicked() {
  this.exportPdfService.exportToPDF(
    this.ridershipTableData[0].dataSource.data,
    this.fileName,
    this.columnsToExport,
    this.getParameters()
  );
}
}

export const ridershipTableData = [
         'stationId',
         'stationName',
         'entryCount',
         'exitCount'
];

