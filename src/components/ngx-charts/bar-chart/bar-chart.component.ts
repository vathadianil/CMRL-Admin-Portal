import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { COLORS } from '../../../util/colors';

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
  multi: any[] = [];

  view: any = [250, 150];
  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';

  ngOnInit(): void {
    this.colorScheme = {
      domain: [this.chartData?.style?.color],
      group: ScaleType.Ordinal,
      selectable: true,
      name: this.chartData?.title,
    };
    this.data = this.chartData?.data;
  }

  onSelect(event: any) {
    console.log(event);
  }
}
