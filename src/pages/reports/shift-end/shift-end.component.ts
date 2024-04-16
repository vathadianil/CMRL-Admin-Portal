import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { ShiftEndDataInterface } from '../../../models/shift-end-data.interface';
import { TableComponent } from '../../../components/table/table.component';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';


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
    MatInputModule,
    MatFormFieldModule
  ],
})
export class ShiftEndComponent implements OnInit {
  shiftEndForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];

  constructor(private commonService: CommonService) {}

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
        'actions',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
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
          actions: 'view_report',
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.shiftEndForm = new FormGroup({
      firstName: new FormControl(),
    });
  }
}
