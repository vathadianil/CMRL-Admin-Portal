import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';

@Component({
  selector: 'app-merchant-wise-revenue',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './merchant-wise-revenue.component.html',
  styleUrl: './merchant-wise-revenue.component.scss',
})
export class MerchantWiseRevenueComponent {
  getIcon = getIcon;
  @Input() chartData: any = {};
  constructor(private dialog: MatDialog) {}

  openGraphDetail(): void {
    const dialogRef = this.dialog.open(ChartDialogComponent, {
      data: { ...this.chartData, isAdvancedChart: true },
    });
  }
}
