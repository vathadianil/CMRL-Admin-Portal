import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LottieAnimationComponent } from '../../lottie-animation/lottie-animation.component';

@Component({
  selector: 'app-tr',
  standalone: true,
  imports: [CommonModule, LottieAnimationComponent],
  templateUrl: './tr.component.html',
  styleUrl: './tr.component.scss',
})
export class TrComponent {
  @Input() equipmentData: any;
}
