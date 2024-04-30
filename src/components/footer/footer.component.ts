import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { getIcon } from '../../util/font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  getIcon = getIcon;
}
