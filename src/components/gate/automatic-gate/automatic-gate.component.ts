import { Component, Input } from '@angular/core';
import { GateCabinateComponent } from '../gate-cabinate/gate-cabinate.component';
import { GateDirectionComponent } from '../gate-direction/gate-direction.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-automatic-gate',
  standalone: true,
  imports: [GateCabinateComponent, GateDirectionComponent, CommonModule],
  templateUrl: './automatic-gate.component.html',
  styleUrl: './automatic-gate.component.scss',
})
export class AutomaticGateComponent {
  @Input() gateData: any;
}
