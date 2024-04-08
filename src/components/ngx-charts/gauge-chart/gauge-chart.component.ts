import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { COLORS } from '../../../util/colors';

@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './gauge-chart.component.html',
  styleUrl: './gauge-chart.component.scss',
})
export class GaugeChartComponent implements OnInit {
  @Input() chartData = [];
  data = [];
  view: any = [170, 260];
  legend: boolean = false;
  legendPosition: any = 'below';

  colorScheme = {
    domain: [COLORS.orange800, COLORS.blue800],
    group: ScaleType.Ordinal,
    selectable: true,
    name: '',
  };

  ngOnInit(): void {
    this.data = this.chartData;
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
