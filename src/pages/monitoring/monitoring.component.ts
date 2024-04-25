import { Component } from '@angular/core';
import { MouseDownOnMapDirective } from '../../directives/map/mouse-down-on-map.directive';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [MouseDownOnMapDirective],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export class MonitoringComponent {
  scale = 1;
  panning = false;
  pointX = 0;
  pointY = 0;
  start = { x: 0, y: 0 };
}
