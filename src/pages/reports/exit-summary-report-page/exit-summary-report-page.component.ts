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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { exitSummaryReportData } from '../../export-data';
import { exitsummarydata } from '../../sample';

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
    FontAwesomeModule,
  ],
  templateUrl: './exit-summary-report-page.component.html',
  styleUrl: './exit-summary-report-page.component.scss',
})
export class ExitSummaryReportPageComponent implements OnInit {
  getIcon = getIcon;
  exitSummaryForm!: FormGroup;
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  equipmentData: any[] = [];
  params: any[] = [];
  fileName = 'Exit Summary Report';
  columnsToExport = exitSummaryReportData;
  sortCols = [
    'transactionDate',
    'stationName',
    'equipmentGroupId',
    'equipmentId',
    'cardType',
    'count',
  ];
  myTableData: any;

  get formParameters() {
    return this.getParameters.bind(this);
  }
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();

    this.equipmentData = this.commonService.getEquipments();
    this.getTableData();

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

  getTableData() {
    let responseData = [];
    const response = exitsummarydata;

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
        value: this.exitSummaryForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.exitSummaryForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.exitSummaryForm.get('stations')?.value,
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
}
