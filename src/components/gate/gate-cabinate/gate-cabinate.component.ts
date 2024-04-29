import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gate-cabinate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gate-cabinate.component.html',
  styleUrl: './gate-cabinate.component.scss',
})
export class GateCabinateComponent {
  @Input() screenLocation: any;
  @Input() array: string = '';
}
