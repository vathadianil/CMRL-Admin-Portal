import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { MatDialog } from '@angular/material/dialog';
import { ChartDialogComponent } from '../../chart-dialog/chart-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../../util/font-awesome-icons';

@Component({
  selector: 'app-pie-chart-container',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PieChartComponent,
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './pie-chart-container.component.html',
  styleUrl: './pie-chart-container.component.scss',
})
export class PieChartContainerComponent {
  @Input() chartData: any = {};
  getIcon = getIcon;

  constructor(private dialog: MatDialog) {}

  openGraphDetail(): void {
    const dialogRef = this.dialog.open(ChartDialogComponent, {
      data: { ...this.chartData, isAdvancedChart: true },
    });
  }
}
