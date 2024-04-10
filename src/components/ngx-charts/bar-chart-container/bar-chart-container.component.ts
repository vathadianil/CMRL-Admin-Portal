import { Component, Input } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { GraphDetailDialogComponent } from '../../../pages/graph-detail-dialog/graph-detail-dialog.component';

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
  ],
  templateUrl: './bar-chart-container.component.html',
  styleUrl: './bar-chart-container.component.scss',
})
export class BarChartContainerComponent {
  @Input() chartData: any = {};

  constructor(private dialog: MatDialog) {}

  openGraphDetail(): void {
    const dialogRef = this.dialog.open(GraphDetailDialogComponent, {
      width: '600px',
      data: this.chartData,
    });
  }
}
