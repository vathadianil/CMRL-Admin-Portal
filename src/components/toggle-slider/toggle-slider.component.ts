import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-toggle-slider',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './toggle-slider.component.html',
  styleUrl: './toggle-slider.component.scss'
})
export class ToggleSliderComponent {
  
}
