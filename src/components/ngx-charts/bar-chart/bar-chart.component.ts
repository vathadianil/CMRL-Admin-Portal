import { Component, Input, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
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
  single: any[] = single;
  multi: any[] = [];
  ngOnInit(): void {
    console.log(this.chartType);
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

  colorScheme: Color = {
    domain: [this.getColor()],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'country population',
  };

  getColor() {
    return this.chartType === 'traffic'
      ? COLORS.green800
      : this.chartType === 'revenue'
      ? COLORS.blue800
      : COLORS.orange800;
  }
  onSelect(event: any) {
    console.log(event);
  }
}
