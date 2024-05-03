import { Component, Input } from '@angular/core';
import { TomComponent } from '../tom/tom.component';
import { CommonModule } from '@angular/common';
import { TrComponent } from '../tr/tr.component';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { LottieAnimationComponent } from '../../lottie-animation/lottie-animation.component';

@Component({
  selector: 'app-scr-efo-room-layout',
  standalone: true,
  imports: [
    TomComponent,
    CommonModule,
    TrComponent,
    MatCardModule,
    FontAwesomeModule,
    LottieAnimationComponent,
  ],
  templateUrl: './scr-efo-room-layout.component.html',
  styleUrl: './scr-efo-room-layout.component.scss',
})
export class ScrEfoRoomLayoutComponent {
  @Input() scrEfoRoomData: any = [];
  getIcon = getIcon;
}
