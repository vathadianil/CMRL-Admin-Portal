import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatTableDataSource } from '@angular/material/table';
import { transactionDataQueryInterface } from '../../../models/transaction-data-query.interface';

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
export class TransactionDataQueryComponent {
  transReportForm!: FormGroup;
  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<transactionDataQueryInterface>;
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
      dataSource: new MatTableDataSource<transactionDataQueryInterface>([
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
}

// columnsInfo: any = {
//   transId: 'Transaction Id',
//   transType: 'Transaction Type',
//   lineId: 'Line Id',
//   stationId: 'Station Id',
//   equipmentGroupId: 'Equipment Group ID',
//   equipId: 'Euipment Id',
//   acquirerId: 'Acquirer Id',
//   operatorId: 'Operator Id',
//   terminalId: 'Terminal Id',
// };

// ngOnInit(): void {
//   this.tableCols = Object.values(this.columnsInfo);
//   this.sortCols = JSON.parse(JSON.stringify(this.tableCols));

//   this.onSubmit();
// }

// onSubmit() {
//   const res = Response;
//   if (res?.transData) {
//     const transDataList = res.transData;
//     this.transData = transDataList.map((element: any) => {
//       let obj: any = {};
//       const keys = Object.keys(element);
//       keys.forEach((key) => {
//         obj[this.columnsInfo[key]] = element[key];
//       });
//       return obj;
//     });
//     this.transDataCopy = JSON.parse(JSON.stringify(this.transData));
//     console.log(this.transDataCopy);
//   } else {
//   }
// }}

// const Response = {
//   transData: [
//     {
//       transId: '764566834220230824025339',
//       transType: '03',
//       lineId: '0303-Stadium',
//       stationId: '3',
//       equipmentGroupId: '1143',
//       equipId: '4',
//       acquirerId: '6014',
//       operatorId: '3030C2',
//       terminalId: '3030C2',
//     },
//     {
//       transId: '764566834220230824025339',
//       transType: '03',
//       lineId: '0303-Stadium',
//       stationId: '3',
//       equipmentGroupId: '1143',
//       equipId: '4',
//       acquirerId: '6014',
//       operatorId: '3030C2',
//       terminalId: '3030C2',
//     },
//   ],
// };
