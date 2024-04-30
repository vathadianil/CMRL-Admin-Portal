import { Component, Input } from '@angular/core';
import { LottieAnimationComponent } from '../lottie-animation/lottie-animation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tom',
  standalone: true,
  imports: [LottieAnimationComponent, CommonModule],
  templateUrl: './tom.component.html',
  styleUrl: './tom.component.scss',
})
export class TomComponent {
  @Input() equipmentData: any;
}
