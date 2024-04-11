import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from '../../../../util/colors';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  @Input() chartData: any;
  data = [];
  colorScheme: any;

  @Input() view: any = [220, 245];
  isAdvancedChart = false;

  // options
  @Input() gradient: boolean = true;
  @Input() showLegend: boolean = false;
  @Input() showLabels: boolean = false;
  @Input() isDoughnut: boolean = true;
  @Input() tooltipDisabled: boolean = true;

  ngOnInit(): void {
    const colors = [];
    this.chartData?.data.map((value: any) => colors.push(value?.style?.color));
    this.colorScheme = {
      domain: colors,
      group: ScaleType.Ordinal,
      selectable: true,
      name: '',
    };
    this.data = this.chartData?.data;
    this.isAdvancedChart = this.chartData?.isAdvancedChart;
  }
}
