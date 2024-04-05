import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { single } from '../../../assets/data';
import { COLORS } from '../../../util/colors';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements OnInit {
  @Input() chartType = '';
  colorScheme: any;

  single: any[] = single;
  multi: any[] = [];

  ngOnInit(): void {
    this.colorScheme = {
      domain: [
        this.chartType === 'entry-traffic'
          ? COLORS.green800
          : this.chartType === 'exit-traffic'
          ? COLORS.blue800
          : COLORS.orange800,
      ],
      group: ScaleType.Ordinal,
      selectable: true,
      name: 'country population',
    };
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
