import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { BarChartContainerComponent } from '../../components/ngx-charts/bar-chart-container/bar-chart-container.component';
import { GaugeChartContaienrComponent } from '../../components/ngx-charts/gauge-chart-contaienr/gauge-chart-contaienr.component';
import { MatListModule } from '@angular/material/list';
import { PieChartContainerComponent } from '../../components/ngx-charts/pie-chart-container/pie-chart-container.component';
import { MerchantWiseRevenueComponent } from '../../components/ngx-charts/merchant-wise-revenue/merchant-wise-revenue.component';
import { Router } from '@angular/router';

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
    debugger;
    this.router.navigate([route]);
  }

  barChartList = [
    {
      title: 'Entry Traffic',
      type: 'entryTraffic',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
      style: {
        backgroundColor: '#f4fcf5',
        color: '#128822',
      },
      data: [
        {
          name: '01/04/2024',
          value: 8940000,
        },
        {
          name: '02/04/2024',
          value: 5000000,
        },
        {
          name: '03/04/2024',
          value: 7200000,
        },
        {
          name: '04/04/2024',
          value: 8940000,
        },
        {
          name: '05/04/2024',
          value: 5000000,
        },
        {
          name: '06/04/2024',
          value: 7200000,
        },
      ],
    },
    {
      title: 'Exit Traffic',
      type: 'exitTraffic',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
      style: {
        backgroundColor: '#f0f3ff',
        color: '#3361ff',
      },
      data: [
        {
          name: '01/04/2024',
          value: 8940000,
        },
        {
          name: '02/04/2024',
          value: 5000000,
        },
        {
          name: '03/04/2024',
          value: 7200000,
        },
        {
          name: '04/04/2024',
          value: 8940000,
        },
        {
          name: '05/04/2024',
          value: 5000000,
        },
        {
          name: '06/04/2024',
          value: 7200000,
        },
      ],
    },
    {
      title: 'Revenue',
      type: 'revenueBar',
      bottomTitle: 'All Stations',
      value: '10k',
      duration: 'Last 6 Days',
      style: {
        backgroundColor: '#fff7f5',
        color: '#ff6633',
      },
      data: [
        {
          name: '01/04/2024',
          value: 8940000,
        },
        {
          name: '02/04/2024',
          value: 8940000,
        },

        {
          name: '03/04/2024',
          value: 7200000,
        },
        {
          name: '04/04/2024',
          value: 5000000,
        },
        {
          name: '05/04/2024',
          value: 7200000,
        },
        {
          name: '06/04/2024',
          value: 5000000,
        },
      ],
    },
  ];

  gaugeChartList = {
    chartType: 'revenue',
    title: 'Revenue',
    total: '10k',
    data: [
      {
        name: 'Cash',
        value: 7000,
        displayValue: '7k',
      },
      {
        name: 'Non Cash',
        value: 3000,
        displayValue: '3k',
      },
    ],
  };

  pieChartList = {
    chartType: 'stock',
    title: 'Card Sale Percentage',
    percentage: '70%',
    data: [
      {
        name: 'Sold',
        value: 7000,
      },
      {
        name: 'Remaining',
        value: 3000,
      },
    ],
  };

  merchantWiseRevenue = {
    title: 'Merchant Wise Revenue',
    data: [
      {
        name: 'Paytm',
        image: '../../../assets/img/paytm.webp',
        value: '10L',
        style: {
          backgroundColor: '#f0f3ff',
          color: '#00baf2',
        },
      },
      {
        name: 'PhonePe',
        image: '../../../assets/img/phonepe.png',
        value: '15L',
        style: {
          backgroundColor: '#ddc7fc',
          color: '#8833ff',
        },
      },
      {
        name: 'Google Pay',
        image: '../../../assets/img/gpay.webp',
        value: '5L',
        style: {
          backgroundColor: '#fff',
          color: '#3361ff',
        },
      },
    ],
  };

  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'login', color: 'blue' },
    { icon: 'home', label: 'Home', route: 'home', color: 'orange' },
    { icon: 'subway', label: 'Services', route: 'services', color: 'red' },
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
