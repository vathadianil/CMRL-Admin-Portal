import { Component } from '@angular/core';
import { NgxSkeltonComponent } from '../ngx-skelton/ngx-skelton.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-skelton',
  standalone: true,
  imports: [NgxSkeltonComponent, MatCardModule],
  templateUrl: './dashboard-skelton.component.html',
  styleUrl: './dashboard-skelton.component.scss',
})
export class DashboardSkeltonComponent {}
