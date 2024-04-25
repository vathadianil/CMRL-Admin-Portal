import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MouseEventsOnMapDirective } from '../../directives/mouse-events-on-map.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    MouseEventsOnMapDirective,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export class MonitoringComponent {
  btnData = [
    {
      top: 40,
      bottom: 0,
      left: 604,
      right: 0,
      isActive: true,
      stationId: '0101',
      stationName: 'Velmugugan Nagar',
    },
    {
      top: 40,
      bottom: 0,
      left: 654.5,
      right: 0,
      isActive: true,
      stationId: '0102',
      stationName: 'Manjambakkam',
    },
    {
      top: 40,
      bottom: 0,
      left: 718,
      right: 0,
      isActive: false,
      stationId: '0103',
      stationName: 'Assissi Nagar',
    },
  ];
}
