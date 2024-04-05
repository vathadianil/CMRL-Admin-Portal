import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChartContainerComponent } from '../../components/ngx-charts/chart-container/chart-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, ChartContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
