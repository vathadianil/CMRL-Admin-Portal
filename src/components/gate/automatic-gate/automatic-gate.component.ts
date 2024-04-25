import { Component } from '@angular/core';
import { GateCabinateComponent } from '../gate-cabinate/gate-cabinate.component';
import { GateDirectionComponent } from '../gate-direction/gate-direction.component';

@Component({
  selector: 'app-automatic-gate',
  standalone: true,
  imports: [GateCabinateComponent, GateDirectionComponent],
  templateUrl: './automatic-gate.component.html',
  styleUrl: './automatic-gate.component.scss',
})
export class AutomaticGateComponent {}
