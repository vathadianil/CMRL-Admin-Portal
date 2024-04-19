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
  ],
})
export class ReconsillationReportPageComponent implements OnInit {
  reconsillationForm!: FormGroup;
  statusData: any[] = [];
  params: any[] = [];
  fileName = 'Exit Summary Report';
  columnsToExport = exitSummaryReportData;

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  reconsillationTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ReconsillationReportInterface>;
  }[] = [
    {
      displayedColumns: [
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
      ],

      dataSource: new MatTableDataSource<ReconsillationReportInterface>([
        {
          afcTransactionType: 'AFC123',
          afcPaymentMethod: 'Credit Card',
          reconStatus: 'Pending',
          transactionDate: '2024-04-19',
          transactionId: '123456789',
          ppblTransactionType: 'PPBL123',
          ppblPaymentMethod: 'PayPal',
          merchantName: 'Dummy Merchant',
          orderId: 'ORD123',
          issuingBank: 'Bank of Dummy',
          paymentAmount: '100.00',
          detailNo: '1',
          merchantId: 'M123',
          originalMerchantId: 'M456',
          mbid: 'MB123',
          paymentType: 'Online',
          paymentCurrency: 'USD',
          responseCode: '200',
          bankTxnId: 'BT123',
          userCustId: 'CUST123',
          bankGateWay: 'Gateway123',
          status: 'Success',
          bankFeeCurrency: 'USD',
          bankFeeAmount: '5.00',
          merchantCommission: '2.00',
          serviceTax: '0.50',
          convenienceFee: '1.00',
          convenienceTax: '0.25',
          settledDate: '2024-04-20',
          refundAmount: '0.00',
          industry: 'Retail',
          settlementTxnId: 'ST123',
          instCode: 'INST123',
          externalSerialNo: 'EXT123',
          reconId: 'RECON123',
          settlementType: 'Automatic',
          settleType: 'Full',
          splitFlag: 'N',
          vouchercode: 'VOUCHER123',
          aggregatorMerchantId: 'AGG123',
          prepaidCard: 'Yes',
          productCode: 'PROD123',
          cardNetwork: 'Visa',
          instantSettlement: 'Yes',
          pwpCategory: 'Category123',
          feeFactor: '1.5',
          acquiringFee: '3.00',
          platformFee: '1.50',
          acquiringTax: '0.75',
          platformTax: '0.25',
          addMoneyType: 'Online',
          corporateCard: 'No',
          utr: 'UTR123',
          firstSixDigits: '123456',
          lastFourDigits: '7890',
          payerMaskedCardNo: '************7890',
          maskedTokenNo: 'TOKEN123',
          dccId: 'DCC123',
          merchantSolutionType: 'Solution123',
          splitFieldDlLastUpdated: '2024-04-20',
          bankTid: 'TID123',
          apprCode: 'APPR123',
          subWalletFeeDetails: 'FeeDetails123',
          subWalletTaxDetails: 'TaxDetails123',
          conveniencePlatformFee: '1.00',
          conveniencePlatformFeeServiceTax: '0.25',
          orderSuccessTime: '2024-04-20',
          stan: 'STAN123',
          runType: 'Type123',
          runDate: '2024-04-20',
          splitType: 'Type123',
          splitDelay: 'No',
          upiModeSubType: 'SubType123',
          dlLastUpdated: '2024-04-20',
          insertTime: '2024-04-20',
        },
      ]),
    },
  ];

  ngOnInit(): void {
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
      this.reconsillationTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.reconsillationTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const exitSummaryReportData = [
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
