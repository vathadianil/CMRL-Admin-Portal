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
export class AutomaticGateComponent {
  gateData = [
    {
      array: '0001',
      equipmentType: 'AG',
      equipmentId: '0003',
      screenLocation: {
        isEntrySide: true,
      },
      isEntryGate: true,
    },
    {
      array: '0001',
      equipmentType: 'AG',
      equipmentId: '0002',
      screenLocation: {
        isEntrySide: true,
      },
      isEntryGate: true,
    },
    {
      array: '0001',
      equipmentType: 'AG',
      equipmentId: '0001',
      screenLocation: {
        isEntrySide: true,
        isExitSide: true,
      },
      isReversableGate: true,
    },
  ];
}
