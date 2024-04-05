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
export class HomePageComponent {
  barChartList = [
    {
      chartType: 'entry-traffic',
      title: 'Entry Traffic',
      bottomTitle: 'All Stations',
      value: 2000,
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
      value: 2000,
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
      value: 10000,
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
  ];
}
