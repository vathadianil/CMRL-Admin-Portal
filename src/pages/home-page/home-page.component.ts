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
      color: 'orange',
    },
    {
      icon: 'subway',
      label: 'Services',
      route: '/home/services',
      color: 'red',
    },
    {
      icon: 'report',
      label: 'Reports',
      route: 'reports',
      color: '#15b72e',
      submenu: [
        {
          icon: 'done',
          label: 'Tom Shift Start',
          route: 'shiftStart',
          color: '#b026b0',
        },
        {
          icon: 'close',
          label: 'Tom Shift End',
          route: 'shiftEnd',
          color: '#cd4040',
        },
      ],
    },
  ];
}
