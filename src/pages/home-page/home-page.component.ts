import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { GaugeChartContaienrComponent } from '../../components/ngx-charts/gauge/gauge-chart-contaienr/gauge-chart-contaienr.component';
import { MatListModule } from '@angular/material/list';
import { PieChartContainerComponent } from '../../components/ngx-charts/pie/pie-chart-container/pie-chart-container.component';
import { MerchantWiseRevenueComponent } from '../../components/ngx-charts/merchant-wise-revenue/merchant-wise-revenue.component';
import { Router } from '@angular/router';
import { BarChartContainerComponent } from '../../components/ngx-charts/bar/bar-chart-container/bar-chart-container.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    BarChartContainerComponent,
    GaugeChartContaienrComponent,
    PieChartContainerComponent,
    MerchantWiseRevenueComponent,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    console.log(route);
    this.router.navigate([route]);
  }

  menuItems = [
    {
      icon: 'home',
      label: 'Dashboard',
      route: '/home/dashboard',
      color: '#15b72e',
    },
    {
      icon: 'file_open',
      label: 'Reports',
      route: 'reports',
      color: '#FF6633',
      submenu: [
        {
          icon: 'alarm',
          label: 'Tom Shift Start',
          route: 'shiftStart',
        },
        {
          icon: 'inbox',
          label: 'Tom Shift End',
          route: 'shiftEnd',
        },
        {
          icon: 'article_shortcut',
          label: 'Transaction Data Query',
          route: 'transactionDataQuery',
        },
        {
          icon: 'input',
          label: 'Entry Summary',
          route: 'entrySummary',
        },

        {
          icon: 'supervisor_account',
          label: 'Ridership Report',
          route: 'ridershipReport',
        },
      ],
    },
  ];
}
