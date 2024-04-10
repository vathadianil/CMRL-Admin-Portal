import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-chart-dialog',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './chart-dialog.component.html',
  styleUrl: './chart-dialog.component.scss',
})
export class ChartDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public chartData: any) {
    console.log(JSON.stringify(chartData));
  }
}
