import { Component, Input } from '@angular/core';
import { GaugeChartComponent } from '../gauge-chart/gauge-chart.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gauge-chart-contaienr',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    GaugeChartComponent,
    CommonModule,
  ],
  templateUrl: './gauge-chart-contaienr.component.html',
  styleUrl: './gauge-chart-contaienr.component.scss',
})
export class GaugeChartContaienrComponent {
  @Input() chartData: any = {};
}
