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

  ngOnInit(): void {
    this.colorScheme = {
      domain: [
        this.chartData?.chartType === 'entry-traffic'
          ? COLORS.green800
          : this.chartData?.chartType === 'exit-traffic'
          ? COLORS.blue800
          : COLORS.orange800,
      ],
      group: ScaleType.Ordinal,
      selectable: true,
      name: 'country population',
    };
    this.data = this.chartData?.data;
  }
  view: any = [250, 200];
  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  onSelect(event: any) {
    console.log(event);
  }
}
