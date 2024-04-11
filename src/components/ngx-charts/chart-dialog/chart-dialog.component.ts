import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { GaugeChartComponent } from '../gauge/gauge-chart/gauge-chart.component';
import { BarChartComponent } from '../bar/bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie/pie-chart/pie-chart.component';

@Component({
  selector: 'app-chart-dialog',
  standalone: true,
  imports: [
    MatCardModule,
    BarChartComponent,
    GaugeChartComponent,
    PieChartComponent,
  ],
  templateUrl: './chart-dialog.component.html',
  styleUrl: './chart-dialog.component.scss',
})
export class ChartDialogComponent {
  title = '';
  constructor(@Inject(MAT_DIALOG_DATA) public chartData: any) {
    this.title = this.chartData?.title;
  }
}
