import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmComponent } from '../tvm/tvm.component';
import { TomComponent } from '../tom/tom.component';

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
