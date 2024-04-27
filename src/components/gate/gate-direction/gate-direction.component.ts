import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LottieAnimationComponent } from '../../lottie-animation/lottie-animation.component';

@Component({
  selector: 'app-gate-direction',
  standalone: true,
  imports: [CommonModule, LottieAnimationComponent],
  templateUrl: './gate-direction.component.html',
  styleUrl: './gate-direction.component.scss',
})
export class GateDirectionComponent {
  @Input() gate: any;
}
