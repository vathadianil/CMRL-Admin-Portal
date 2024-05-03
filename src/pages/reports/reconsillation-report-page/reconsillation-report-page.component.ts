import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { TableComponent } from '../../../components/table/table.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';

import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { ReconsillationReportInterface } from '../../../models/reconsillation-report.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { reconsillationData } from '../../sample';
import { reconsillationTableData } from '../../export-data';

@Component({
  selector: 'app-reconsillation-report-page',
  standalone: true,
  templateUrl: './reconsillation-report-page.component.html',
  styleUrl: './reconsillation-report-page.component.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    PagetitleComponent,
    DateTimePickerComponent,
    DropDownComponent,
    SearchComponent,
    FabButtonFieldComponent,
    TableComponent,
    ButtonFieldComponent,
    FontAwesomeModule,
  ],
})
export class ReconsillationReportPageComponent implements OnInit {
  getIcon = getIcon;
  reconsillationForm!: FormGroup;
  statusData: any[] = [];
  params: any[] = [];
  fileName = 'Exit Summary Report';
  columnsToExport = reconsillationTableData;
  sortCols = [
    'afcTransactionType',
    'afcPaymentMethod',
    'reconStatus',
    'transactionDate',
    'transactionId',
    'ppblTransactionType',
    'ppblPaymentMethod',
    'merchantName',
    'orderId',
    'issuingBank',
    'paymentAmount',
    'detailNo',
    'merchantId',
    'originalMerchantId',
    'mbid',
    'paymentType',
    'paymentCurrency',
    'responseCode',
    'bankTxnId',
    'userCustId',
    'bankGateWay',
    'status',
    'bankFeeCurrency',
    'bankFeeAmount',
    'merchantCommission',
    'serviceTax',
    'convenienceFee',
    'convenienceTax',
    'settledDate',
    'refundAmount',
    'industry',
    'settlementTxnId',
    'instCode',
    'externalSerialNo',
    'reconId',
    'settlementType',
    'settleType',
    'splitFlag',
    'vouchercode',
    'aggregatorMerchantId',
    'prepaidCard',
    'productCode',
    'cardNetwork',
    'instantSettlement',
    'pwpCategory',
    'feeFactor',
    'acquiringFee',
    'platformFee',
    'acquiringTax',
    'platformTax',
    'addMoneyType',
    'corporateCard',
    'utr',
    'firstSixDigits',
    'lastFourDigits',
    'payerMaskedCardNo',
    'maskedTokenNo',
    'dccId',
    'merchantSolutionType',
    'splitFieldDlLastUpdated',
    'bankTid',
    'apprCode',
    'subWalletFeeDetails',
    'subWalletTaxDetails',
    'conveniencePlatformFee',
    'conveniencePlatformFeeServiceTax',
    'orderSuccessTime',
    'stan',
    'runType',
    'runDate',
    'splitType',
    'splitDelay',
    'upiModeSubType',
    'dlLastUpdated',
    'insertTime',
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
    this.getTableData();
    this.statusData = this.commonService.getStatus();

    this.reconsillationForm = new FormGroup({
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
    const response = reconsillationData;

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
        value: this.reconsillationForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.reconsillationForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.reconsillationForm.get('transactionType')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.reconsillationForm.value);
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
