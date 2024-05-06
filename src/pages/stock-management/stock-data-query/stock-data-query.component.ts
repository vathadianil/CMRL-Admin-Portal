import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { TableComponent } from '../../../components/table/table.component';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { InputTextComponent } from '../../../components/input-text/input-text.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { stockManagementTableData } from '../../export-data';
import { HttpClientModule } from '@angular/common/http';
import { stockManagementData } from '../../sample';

@Component({
  selector: 'app-stock-data-query',
  standalone: true,
  templateUrl: './stock-data-query.component.html',
  styleUrl: './stock-data-query.component.scss',
  imports: [
    MatCardModule,
    PagetitleComponent,
    FontAwesomeModule,
    DateTimePickerComponent,
    DropDownComponent,
    InputTextComponent,
    ButtonFieldComponent,
    ReactiveFormsModule,
    FabButtonFieldComponent,
    SearchComponent,
    TableComponent,
  ],
})
export class StockDataQueryComponent implements OnInit {
  getIcon = getIcon;
  stockDataForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  params: any[] = [];
  fileName = 'Shift End Report';
  columnsToExport = stockManagementTableData;
  // actions = ['action-status'];
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

  constructor(private commonService: CommonService) {}

  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();

    this.getTableData();

    this.stockDataForm = new FormGroup({
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
    const response = stockManagementData;

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
        value: this.stockDataForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.stockDataForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.stockDataForm.get('stations')?.value,
      },
      {
        key: 'transactionType',
        value: this.stockDataForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.stockDataForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.stockDataForm.value);
  }
}
