import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-animation',
  standalone: true,
  imports: [LottieComponent, CommonModule],
  templateUrl: './lottie-animation.component.html',
  styleUrl: './lottie-animation.component.scss',
})
export class LottieAnimationComponent {
  private animationItem: AnimationItem | undefined;
  @Input() options: AnimationOptions = {
    path: '',
    loop: true,
    autoplay: true,
  };
  @Input() width = 30;
  @Input() height = 30;
  @Input() isReverse = false;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
  play(): void {
    if (this.animationItem) {
      this.animationItem.play();
    }
  }

  pause(): void {
    if (this.animationItem) {
      this.animationItem.pause();
    }
  }

  stop(): void {
    if (this.animationItem) {
      this.animationItem.stop();
    }
  }
}
