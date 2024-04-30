import { Component, Input } from '@angular/core';
import { TvmComponent } from '../tvm/tvm.component';
import { TomComponent } from '../tom/tom.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tom-room-layout',
  standalone: true,
  imports: [TvmComponent, TomComponent, CommonModule],
  templateUrl: './tom-room-layout.component.html',
  styleUrl: './tom-room-layout.component.scss',
})
export class TomRoomLayoutComponent {
  @Input() tomRoomData: any;
}
