import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chart-dialog',
  standalone: true,
  imports: [MatCardModule, BarChartComponent],
  templateUrl: './chart-dialog.component.html',
  styleUrl: './chart-dialog.component.scss',
})
export class ChartDialogComponent {
  title = '';
  constructor(@Inject(MAT_DIALOG_DATA) public chartData: any) {
    this.title = this.chartData?.title;
  }
}
