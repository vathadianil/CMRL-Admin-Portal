import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AutomaticGateComponent } from '../../components/gate/automatic-gate/automatic-gate.component';

@Component({
  selector: 'app-station-monitoring',
  standalone: true,
  imports: [MatCardModule, AutomaticGateComponent],
  templateUrl: './station-monitoring.component.html',
  styleUrl: './station-monitoring.component.scss',
})
export class StationMonitoringComponent {}
