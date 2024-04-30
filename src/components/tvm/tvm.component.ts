import { Component, Input } from '@angular/core';
import { LottieAnimationComponent } from '../lottie-animation/lottie-animation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tvm',
  standalone: true,
  imports: [LottieAnimationComponent, CommonModule],
  templateUrl: './tvm.component.html',
  styleUrl: './tvm.component.scss',
})
export class TvmComponent {
  @Input() equipmentData: any;
}
