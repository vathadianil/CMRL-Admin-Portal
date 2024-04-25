import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-station-monitoring',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './station-monitoring.component.html',
  styleUrl: './station-monitoring.component.scss',
})
export class StationMonitoringComponent {}
