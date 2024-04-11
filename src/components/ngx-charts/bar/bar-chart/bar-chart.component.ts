import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  @Input() chartData: any;
  colorScheme: any;
  data: any[] = [];
  @Input() view: any = [250, 150];
  // options
  @Input() showXAxis = false;
  @Input() showYAxis = false;
  @Input() gradient = false;
  @Input() showLegend = false;
  @Input() showXAxisLabel = false;
  @Input() xAxisLabel = '';
  @Input() showYAxisLabel = false;
  @Input() yAxisLabel = '';

  ngOnInit(): void {
    this.colorScheme = {
      domain: [this.chartData?.style?.color],
      group: ScaleType.Ordinal,
      selectable: true,
      name: this.chartData?.title,
    };
    this.data = this.chartData?.data;
  }
}
