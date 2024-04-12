import { Component } from '@angular/core';
import { MerchantWiseRevenueComponent } from '../../components/ngx-charts/merchant-wise-revenue/merchant-wise-revenue.component';
import { BarChartContainerComponent } from '../../components/ngx-charts/bar/bar-chart-container/bar-chart-container.component';
import { GaugeChartContaienrComponent } from '../../components/ngx-charts/gauge/gauge-chart-contaienr/gauge-chart-contaienr.component';
import { PieChartContainerComponent } from '../../components/ngx-charts/pie/pie-chart-container/pie-chart-container.component';
import { DashboardSkeltonComponent } from '../../components/skelton/dashboard-skelton/dashboard-skelton.component';
import { EntryExitRevenueBarChartModel } from '../../models/entry-exit-revenue-bar-chart.model';
import { RevenueGaugeChartModel } from '../../models/revenue-gauge-chart.model';
import { CardSalePercentagePieChartModel } from '../../models/card-sale-percentage-pie-chart.model';
import { MerchantWiseRevenueChartModel } from '../../models/merchant-wise-revenue-chart.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BarChartContainerComponent,
    GaugeChartContaienrComponent,
    PieChartContainerComponent,
    MerchantWiseRevenueComponent,
    DashboardSkeltonComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  barChartList: EntryExitRevenueBarChartModel[] = [
    {
      title: 'Entry Traffic',
      type: 'bar',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
      xAxisLabel: 'Date',
      yAxisLabel: 'Entry Count',
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
      type: 'bar',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
      xAxisLabel: 'Date',
      yAxisLabel: 'Exit Count',
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
      type: 'bar',
      bottomTitle: 'All Stations',
      value: '10k',
      duration: 'Last 6 Days',
      xAxisLabel: 'Date',
      yAxisLabel: 'Revenue',
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

  gaugeChartList: RevenueGaugeChartModel = {
    type: 'gauge',
    title: 'Revenue',
    total: '10k',
    style: {
      titleColor: '#ff6633',
      totalTextBackgroundColor: '#f4fcf5',
      totalTextColor: '#128822',
    },
    data: [
      {
        name: 'Cash',
        value: 7000,
        displayValue: '7k',
        style: {
          color: '#ff6633',
        },
      },
      {
        name: 'Non Cash',
        value: 3000,
        displayValue: '3k',
        style: {
          color: '#3361ff',
        },
      },
    ],
  };

  pieChartList: CardSalePercentagePieChartModel = {
    type: 'pie',
    title: 'Card Sale Percentage',
    percentage: '70%',
    isAdvancedChart: false,
    style: {
      titleColor: '#128822',
    },
    data: [
      {
        name: 'Sold',
        value: 7000,
        style: {
          color: '#128822',
        },
      },
      {
        name: 'Remaining',
        value: 3000,
        style: {
          color: '#f4fcf5',
        },
      },
    ],
  };

  merchantWiseRevenue: MerchantWiseRevenueChartModel = {
    title: 'Merchant Wise Revenue',
    type: 'card',
    data: [
      {
        name: 'Paytm',
        image: '../../../assets/img/paytm.webp',
        value: 10000,
        displayValue: '10k',
        style: {
          backgroundColor: '#f0f3ff',
          color: '#00baf2',
        },
      },
      {
        name: 'PhonePe',
        image: '../../../assets/img/phonepe.png',
        value: 15000,
        displayValue: '15k',
        style: {
          backgroundColor: '#ddc7fc',
          color: '#8833ff',
        },
      },
      {
        name: 'Google Pay',
        image: '../../../assets/img/gpay.webp',
        value: 5000,
        displayValue: '5k',
        style: {
          backgroundColor: '#fff',
          color: '#3361ff',
        },
      },
    ],
  };
}
