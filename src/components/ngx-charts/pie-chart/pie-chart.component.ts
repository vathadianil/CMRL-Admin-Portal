import { Component, Input, OnInit } from '@angular/core';
import { COLORS } from '../../../util/colors';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  @Input() chartData = [];
  data = [];
  view: any = [220, 245];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = true;
  tooltipDisabled: boolean = true;

  colorScheme = {
    domain: [COLORS.green800, COLORS.green50],
    group: ScaleType.Ordinal,
    selectable: true,
    name: '',
  };
  ngOnInit(): void {
    this.data = this.chartData;
  }

  onSelect(event) {
    console.log(event);
  }
}
