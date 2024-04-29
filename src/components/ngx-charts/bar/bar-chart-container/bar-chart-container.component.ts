import { Component, Input } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { ChartDialogComponent } from '../../chart-dialog/chart-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../../util/font-awesome-icons';

@Component({
  selector: 'app-bar-chart-container',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BarChartComponent,
    CommonModule,
    MatMenuModule,
    FontAwesomeModule,
  ],
  templateUrl: './bar-chart-container.component.html',
  styleUrl: './bar-chart-container.component.scss',
})
export class BarChartContainerComponent {
  @Input() chartData: any = {};
  constructor(private dialog: MatDialog) {}
  getIcon = getIcon;

  openGraphDetail(): void {
    const dialogRef = this.dialog.open(ChartDialogComponent, {
      data: this.chartData,
    });
  }
}
