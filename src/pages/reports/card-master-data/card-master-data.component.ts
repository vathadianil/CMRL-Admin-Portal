import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormControl,
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
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';
import { MatIconModule } from '@angular/material/icon';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { CardMasterInterface } from '../../../models/card-master-data.interface';
import { InputTextComponent } from '../../../components/input-text/input-text.component';

@Component({
  selector: 'app-card-master-data',
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
    InputTextComponent,
  ],
  templateUrl: './card-master-data.component.html',
  styleUrl: './card-master-data.component.scss',
})
export class CardMasterDataComponent implements OnInit {
  cardMasterForm!: FormGroup;
  transactionTypeData: any[] = [];
  fileName = 'Transaction Data Query';
  columnsToExport = cardMasterData;
  params: any[] = [];
  sortCols = [
    'customerName',
    'customerMobileNo',
    'trxId',
    'trxType',
    'lineId',
    'stationId',
    'equpGrpId',
    'equpId',
    'aqurId',
    'operId',
    'trmId',
    'crdType',
    'panSha',
    'prdType',
    'businessDt',
    'trxDtTm',
  ];
  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}
  cardMasterData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<CardMasterInterface>;
  }[] = [
    {
      displayedColumns: [
        'customerName',
        'customerMobileNo',
        'trxId',
        'trxType',
        'lineId',
        'stationId',
        'equpGrpId',
        'equpId',
        'aqurId',
        'operId',
        'trmId',
        'crdType',
        'panSha',
        'prdType',
        'businessDt',
        'trxDtTm',
      ],
      dataSource: new MatTableDataSource<CardMasterInterface>([
        {
          customerName: 'John Doe',
          customerMobileNo: '1234567890',
          trxId: 'ABC123',
          trxType: 'Purchase',
          lineId: 'Line ',
          stationId: 'Station ',
          equpGrpId: 'Group ',
          equpId: 'Equipment ',
          aqurId: 'Acquirer ',
          operId: 'Operator ',
          trmId: 'Terminal ',
          crdType: 'Credit',
          panSha: 'XXXX-XXXX-XXXX-234',
          prdType: 'Product ',
          businessDt: '2024-04-15',
          trxDtTm: '2024-04-15T10:30:00',
        },
        {
          customerName: 'Jane Smith',
          customerMobileNo: '9876543210',
          trxId: 'XYZ789',
          trxType: 'Refund',
          lineId: 'Line ',
          stationId: 'Station ',
          equpGrpId: 'Group ',
          equpId: 'Equipment ',
          aqurId: 'Acquirer ',
          operId: 'Operator ',
          trmId: 'Terminal ',
          crdType: 'Debit',
          panSha: 'XXXX-XXXX-XXXX-5678',
          prdType: 'Product ',
          businessDt: '2024-04-16',
          trxDtTm: '2024-04-16T14:45:00',
        },
      ]),
    },
  ];

  ngOnInit() {
    this.transactionTypeData = this.commonService.getTransactionTypes();

    this.cardMasterForm = new FormGroup({
      fromDate: new FormControl(
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
      toDate: new FormControl(
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
        value: this.cardMasterForm.get('fromDate')?.value,
      },
      {
        key: 'toDate',
        value: this.cardMasterForm.get('toDate')?.value,
      },
      {
        key: 'stations',
        value: this.cardMasterForm.get('transactionType')?.value,
      },
      {
        key: 'transactionType',
        value: this.cardMasterForm.get('transactionType')?.value,
      },
      {
        key: 'equipmentName',
        value: this.cardMasterForm.get('equipmentName')?.value,
      },
    ];
    return this.params;
  }
  onSubmit() {
    console.log(this.cardMasterForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.cardMasterData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.cardMasterData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}
export const cardMasterData = [
  'customerName',
  'customerMobileNo',
  'trxId',
  'trxType',
  'lineId',
  'stationId',
  'equpGrpId',
  'equpId',
  'aqurId',
  'operId',
  'trmId',
  'crdType',
  'panSha',
  'prdType',
  'businessDt',
  'trxDtTm',
];
