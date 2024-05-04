import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-shift-end-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './shift-end-table.component.html',
  styleUrl: './shift-end-table.component.scss'
})



export class ShiftEndTableComponent {
  shiftEndData = [
    {
      transaction: 'Total By UPI',
      count: 0,
      amount: 0,
    },
    {
      transaction: 'ADD Money Wallet',
      count: 0,
      amount: 0,
    },
    {
      transaction: 'Update Balance',
      count: 0,
      amount: 0,
    },
    {
      transaction: 'Penalty Store Value',
      count: 0,
      amount: 0,
    },
    {
      transaction: 'Void',
      count: 0,
      amount: 0,
    },
  ]

  displayedColumns: string[] = ['transaction', 'count', 'amount'];
  dataSource = this.shiftEndData
}
