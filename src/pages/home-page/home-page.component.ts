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
import { FooterComponent } from '../../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../util/font-awesome-icons';

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
    FooterComponent,
    FontAwesomeModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  getIcon = getIcon;
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
      icon: 'monitoring',
      label: 'Monitoring',
      route: '/home/monitoring',
      color: '#8833ff',
    },
    {
      icon: 'file',
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
          icon: 'credit_card',
          label: 'Card master Data',
          route: 'cardMasterData',
        },
        {
          icon: 'input',
          label: 'Entry Summary Report',
          route: 'entrySummaryReport',
        },

        {
          icon: 'cancel_presentation',
          label: 'Exit Summary Report',
          route: 'exitSummaryReport',
        },

        {
          icon: 'supervisor_account',
          label: 'Ridership Report',
          route: 'ridershipReport',
        },
        {
          icon: 'domain_verification',
          label: 'Reconsillation Report',
          route: 'reconsillationReport',
        },
        {
          icon: 'assignment_turned_in',
          label: 'Transaction Sequence',
          route: 'transactionSequence',
        },
      ],
    },
    {
      icon: 'microChip',
      label: 'Device Management',
      route: 'deviceManagemet',
      color: '#feca33',
      submenu: [
        {
          icon: 'memory',
          label: 'Reader Management',
          route: 'readerManagement',
        },
      ],
    },
    {
      icon: 'train',
      label: 'Station Management',
      route: 'stationManagement',
      color: 'purple',
      submenu: [
        {
          icon: 'tune',
          label: 'Lines',
          route: 'lines',
        },
        {
          icon: 'tram',
          label: 'Stations',
          route: 'stations',
        },
      ],
    },
    {
      icon: 'manage_accounts',
      label: 'User Management',
      route: 'userManagement',
      color: '#c824ce',
      submenu: [
        {
          icon: 'group',
          label: 'Users',
          route: 'users',
        },
        {
          icon: 'roles',
          label: 'Roles',
          route: 'roles',
        },
        {
          icon: 'privileges',
          label: 'Privileges',
          route: 'privileges',
        },
      ],
    },
  ];
}
