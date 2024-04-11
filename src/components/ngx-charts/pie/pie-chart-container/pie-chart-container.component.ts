import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-pie-chart-container',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    PieChartComponent,
    CommonModule,
  ],
  templateUrl: './pie-chart-container.component.html',
  styleUrl: './pie-chart-container.component.scss',
})
export class PieChartContainerComponent {
  @Input() chartData: any = {};
}
