import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';

@Component({
  selector: 'app-transaction-data-query',
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
  ],
  templateUrl: './transaction-data-query.component.html',
  styleUrl: './transaction-data-query.component.scss',
})
export class TransactionDataQueryComponent implements OnInit {
  data: any[] = [];
  transData: any = [];
  transDataCopy: any = [];
  searchValue: string = '';
  isAPIFailed: boolean = false;
  loading: boolean = false;
  stationData: any[] = [];
  stationCode: any; // actions=['view']
  stationDefaultValue = '';

  allColumnsInfo: { [key: string]: string } = {
    transDateTime: 'TRANSACTION_DATE_TIME',
    transId: 'TRANSACTION_ID',
    transType: 'TRANSACTION_TYPE',
    lineId: 'LINE_ID',
    stationId: 'STATION_ID',
    equipmentGroupId: 'EQUIPMENT_GROUP_ID',
    equipId: 'EQUIPMENT_ID',
    acquirerId: 'ACQUIRER_ID',
    operatorId: 'OPERATOR_ID',
    terminalId: 'TERMINAL_ID',
    panSha: 'PAN(SHA)',
    serviceType: 'SERVICE_TYPE',
    tomShiftId: 'TOM/EFO_SHIFT_ID',
    paytmTid: 'PAYTM_TID',
    paytmMid: 'PAYTM_MID',
    bussinessDate: 'BUSINESS_DATE',
  };

  columnsInfo: { [key: string]: string } = {
    transDateTime: 'TRANSACTION_DATE_TIME',
    transId: 'TRANSACTION_ID',
    transType: 'TRANSACTION_TYPE',
    lineId: 'LINE_ID',
    stationId: 'STATION_ID',
    equipmentGroupId: 'EQUIPMENT_GROUP_ID',
    equipId: 'EQUIPMENT_ID',
    acquirerId: 'ACQUIRER_ID',
    operatorId: 'OPERATOR_ID',
    terminalId: 'TERMINAL_ID',
    panSha: 'PAN(SHA)',
    serviceType: 'SERVICE_TYPE',
    tomShiftId: 'TOM/EFO_SHIFT_ID',
    paytmTid: 'PAYTM_TID',
    paytmMid: 'PAYTM_MID',
    bussinessDate: 'BUSINESS_DATE',
  };

  tableCols: any = [];
  sortCols: any = [];
  transReportForm!: FormGroup;

  get isFormValid(): boolean {
    return this.transReportForm.valid;
  }

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.tableCols = Object.values(this.columnsInfo);
    this.transReportForm = this.fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
    // this.matIconRegistry.addSvgIcon(
    //   'export-excel-2',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     'assets/images/export-excel-2.svg'
    //   )
    // );
  }

  // ngOnInit(): void {
  //   this.tableCols = Object.values(this.columnsInfo);
  //   this.sortCols = JSON.parse(JSON.stringify(this.tableCols));
  //   let todayDate = new Date();

  //   // this.timReportForm.patchValue({
  //   //   fromDate: this.commonService.formatDateToDDMMYYYY(todayDate),
  //   //   toDate: this.commonService.formatDateToDDMMYYYY(todayDate),
  //   // });
  // }

  dateChanged(event: any, action: string) {
    let date: Date = event.value;
    switch (action) {
      case 'from':
        this.transReportForm.patchValue({
          //fromDate: this.commonService.formatDateToDDMMYYYY(date),
        });
        break;
      case 'to':
        this.transReportForm.patchValue({
          // toDate: this.commonService.formatDateToDDMMYYYY(date),
        });
    }
  }

  stationValue(data: any) {
    this.stationCode = data;
  }

  ngOnInit(): void {
    this.tableCols = Object.values(this.columnsInfo);
    this.sortCols = JSON.parse(JSON.stringify(this.tableCols));
    let todayDate = new Date();
    this.isAPIFailed = false;
    this.loading = true;
    this.transData = [];
    this.transDataCopy = [];
    let params = [
      {
        key: 'fromDate',
        value: this.transReportForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.transReportForm.get('toDate')?.value,
      },
    ];

    const res = RESP;
    if (res?.transData) {
      const dataList = res.transData;
      this.transData = dataList.map((element: any) => {
        let obj: any = {};
        const keys = Object.keys(element);
        keys.forEach((key) => {
          obj[this.columnsInfo[key]] = element[key];
        });
        return obj;
      });
      this.transDataCopy = JSON.parse(JSON.stringify(this.transData));
    } else {
      this.isAPIFailed = true;
    }
  }

  exportData(): void {
    // const fileName = 'Tim Report';
    // const fileType = 'TIMREPORT';
    // const columnsToExport = timDetails;
    // let params = [
    //   {
    //     key: 'fromDate',
    //     value: this.commonService.changeDateFormatForExport(
    //       this.timReportForm.get('fromDate')?.value
    //     ),
    //   },
    //   {
    //     key: 'toDate',
    //     value: this.commonService.changeDateFormatForExport(
    //       this.timReportForm.get('toDate')?.value
    //     ),
    //   },
    // ];
    // this.exportService.exportToExcel(
    //   this.timDataCopy,
    //   fileName,
    //   fileType,
    //   columnsToExport,
    //   params
    // );
  }
}

export const RESP = {
  transData: [
    {
      transDateTime: '03-Feb-2611 06:50:25',
      transId: '764566834220230824025339',
      transType: '03',
      lineId: '0303-Stadium',
      stationId: '3',
      equipmentGroupId: '1143',
      equipId: '4',
      acquirerId: '6014',
      operatorId: '3030C2',
      terminalId: '3030C2',
      panSha: '••••••••••••1788',
      serviceType: '1',
      tomShiftId: '0303354555',
      paytmTid: '11075316',
      paytmMid: 'LTMetr33790038971459',
      bussinessDate: '24-Aug-2023',
    },
  ],
};
