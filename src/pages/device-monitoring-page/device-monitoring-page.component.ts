import { Component } from '@angular/core';
import { MouseDownOnMapDirective } from '../../directives/map/mouse-down-on-map.directive';

@Component({
  selector: 'app-device-monitoring-page',
  standalone: true,
  imports: [MouseDownOnMapDirective],
  templateUrl: './device-monitoring-page.component.html',
  styleUrl: './device-monitoring-page.component.scss',
})
export class DeviceMonitoringPageComponent {
  scale = 1;
  panning = false;
  pointX = 0;
  pointY = 0;
  start = { x: 0, y: 0 };
}
