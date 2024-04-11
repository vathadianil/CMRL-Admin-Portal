import { Component, Input } from '@angular/core';
import { GaugeChartComponent } from '../gauge-chart/gauge-chart.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ChartDialogComponent } from '../../chart-dialog/chart-dialog.component';

@Component({
  selector: 'app-gauge-chart-contaienr',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    GaugeChartComponent,
    CommonModule,
  ],
  templateUrl: './gauge-chart-contaienr.component.html',
  styleUrl: './gauge-chart-contaienr.component.scss',
})
export class GaugeChartContaienrComponent {
  @Input() chartData: any = {};

  constructor(private dialog: MatDialog) {}

  openGraphDetail(): void {
    const dialogRef = this.dialog.open(ChartDialogComponent, {
      data: this.chartData,
    });
  }
}
