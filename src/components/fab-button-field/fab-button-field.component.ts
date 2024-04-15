import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-fab-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: './fab-button-field.component.html',
  styleUrls: ['./fab-button-field.component.scss'],
})
export class FabButtonFieldComponent {
  @Input() icon = 'download';
  @Input() showMenu = true;
  @Input() showPdf = true;
  @Input() isDownloadBtn = true;
}
