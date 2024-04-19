import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
