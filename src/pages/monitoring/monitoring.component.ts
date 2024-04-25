import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MouseEventsOnMapDirective } from '../../directives/mouse-events-on-map.directive';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [MatCardModule, MouseEventsOnMapDirective],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export class MonitoringComponent {}
