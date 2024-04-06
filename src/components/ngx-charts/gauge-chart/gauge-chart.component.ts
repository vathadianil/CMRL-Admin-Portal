import { Component } from '@angular/core';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { single } from '../../../assets/data';
import { COLORS } from '../../../util/colors';

@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './gauge-chart.component.html',
  styleUrl: './gauge-chart.component.scss',
})
export class GaugeChartComponent {
  single: any[];
  view: any = [170, 260];
  legend: boolean = false;
  legendPosition: any = 'below';

  colorScheme = {
    domain: [COLORS.orange800, COLORS.blue800],
    group: ScaleType.Ordinal,
    selectable: true,
    name: '',
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
