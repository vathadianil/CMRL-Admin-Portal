import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionDataQueryInterface } from '../../../models/transaction-data-query.interface';
import { CommonService } from '../../../services/common.service';

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
  transReportForm!: FormGroup;
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  transactionTypeData: any[] = [];
  equipmentData: any[] = [];
  constructor(private commonService: CommonService) {}
  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<TransactionDataQueryInterface>;
  }[] = [
    {
      displayedColumns: [
        'transId',
        'transType',
        'lineId',
        'stationId',
        'equipmentGroupId',
        'equipId',
        'acquirerId',
        'operatorId',
        'terminalId',
      ],
      dataSource: new MatTableDataSource<TransactionDataQueryInterface>([
        {
          transId: '764566834220230824025339',
          transType: '03',
          lineId: '0303-Stadium',
          stationId: '3',
          equipmentGroupId: '1143',
          equipId: '4',
          acquirerId: '6014',
          operatorId: '3030C2',
          terminalId: '3030C2',
        },
        {
          transId: '764566834220230824025339',
          transType: '03',
          lineId: '0303-Stadium',
          stationId: '3',
          equipmentGroupId: '1143',
          equipId: '4',
          acquirerId: '6014',
          operatorId: '3030C2',
          terminalId: '3030C2',
        },
      ]),
    },
  ];

  ngOnInit() {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.transReportForm = new FormGroup({
      firstName: new FormControl(),
    });
  }
}
