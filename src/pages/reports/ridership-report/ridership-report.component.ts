import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { ridershipdata } from '../../sample';
import { ridershipTableData } from '../../export-data';

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
    MatIconModule,
    DateTimePickerComponent,
    FontAwesomeModule,
  ],
  templateUrl: './ridership-report.component.html',
  styleUrl: './ridership-report.component.scss',
})
export class RidershipReportComponent {
  getIcon = getIcon;
  ridershipReportForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];
  fileName = 'RiderShip Report';
  columnsToExport = ridershipTableData;
  params: any[] = [];
  sortCols = ['stationId', 'stationName', 'entryCount', 'exitCount'];

  get formParameters() {
    return this.getParameters.bind(this);
  }
  constructor(private commonService: CommonService) {}

  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();
    this.getTableData();

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

  getTableData() {
    let responseData = [];
    const response = ridershipdata;

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
}
