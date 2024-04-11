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
  @Input() chartData: any;
  data = [];
  colorScheme: any;
  @Input() view: any = [170, 260];
  @Input() showLegend: boolean = false;
  @Input() showAxis = false;
  @Input() showText = false;
  @Input() units = '';

  ngOnInit(): void {
    this.colorScheme = {
      domain: [COLORS.orange800, COLORS.blue800],
      group: ScaleType.Ordinal,
      selectable: true,
      name: this.chartData?.title,
    };
    this.data = this.chartData?.data;
  }
}
