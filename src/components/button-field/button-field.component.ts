import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../util/font-awesome-icons';

@Component({
  selector: 'app-button-field',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FontAwesomeModule
  ],
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.scss'],
})
export class ButtonFieldComponent {
  @Input() label: string = 'Label';
  @Input() width: number = 28.125;
  @Input() height: number = 3.5;
  @Input() fontSize: number = 18;
  @Input() disabled = false;
  @Input() type = 'button';
  @Input() showSpinner: boolean = false;
  @Output() buttonClick = new EventEmitter<void>();
  @Input() backgroundColor = '#3361ff';
  @Input() color = '#fff';
  @Input() icon = ''
  
  getIcon = getIcon

  onButtonClick() {
    this.buttonClick.emit();
  }
}
