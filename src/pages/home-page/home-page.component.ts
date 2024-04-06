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

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    BarChartContainerComponent,
    GaugeChartContaienrComponent,
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
  barChartList = [
    {
      chartType: 'entry-traffic',
      title: 'Entry Traffic',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
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
      chartType: 'exit-traffic',
      title: 'Exit Traffic',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
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
      chartType: 'revenue',
      title: 'Revenue',
      bottomTitle: 'All Stations',
      value: '10k',
      duration: 'Last 6 Days',
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

  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'login' },
    { icon: 'home', label: 'Home', route: 'home' },
    {
      icon: 'report',
      label: 'Reports',
      route: 'reports',
      submenu: [
        { icon: 'done', label: 'Tom Shift Start', route: 'shiftStart' },
        { icon: 'close', label: 'Tom Shift End', route: 'shiftEnd' },
      ],
    },
  ];
}
