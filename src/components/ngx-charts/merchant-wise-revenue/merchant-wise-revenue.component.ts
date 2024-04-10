import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-merchant-wise-revenue',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './merchant-wise-revenue.component.html',
  styleUrl: './merchant-wise-revenue.component.scss',
})
export class MerchantWiseRevenueComponent {
  @Input() chartData: any = {};
}
