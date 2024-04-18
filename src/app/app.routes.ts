import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadComponent: () =>
      import(`../pages/login-page/login-page.component`).then(
        (c) => c.LoginPageComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import(`../pages/home-page/home-page.component`).then(
        (c) => c.HomePageComponent
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(`../pages/dashboard/dashboard.component`).then(
            (c) => c.DashboardComponent
          ),
      },

      {
        path: 'transactionDataQuery',
        loadComponent: () =>
          import(
            `../pages/reports/transaction-data-query/transaction-data-query.component`
          ).then((c) => c.TransactionDataQueryComponent),
      },

      {
        path: 'shiftStart',
        loadComponent: () =>
          import(
            `../pages/reports/shift-start-report/shift-start-report.component`
          ).then((c) => c.ShiftStartReportComponent),
      },
      {
        path: 'shiftEnd',
        loadComponent: () =>
          import(`../pages/reports/shift-end/shift-end.component`).then(
            (c) => c.ShiftEndComponent
          ),
      },
      {
        path: 'ridershipReport',
        loadComponent: () =>
          import(`../pages/reports/ridership-report/ridership-report.component`).then(
            (c) => c.RidershipReportComponent
          ),
      },

      {
        path: 'entrySummaryReport',
        loadComponent: () =>
          import(`../pages/reports/entry-summary-report-page/entry-summary-report-page.component`).then(
            (c) => c.EntrySummaryReportPageComponent
          ),
      },

      {
        path: 'exitSummaryReport',
        loadComponent: () =>
          import(`../pages/reports/exit-summary-report-page/exit-summary-report-page.component`).then(
            (c) => c.ExitSummaryReportPageComponent
          ),
      },

      {
        path: 'reconsillationReport',
        loadComponent: () =>
          import(`../pages/reports/reconsillation-report-page/reconsillation-report-page.component`).then(
            (c) => c.ReconsillationReportPageComponent
          ),
      },
    ],
  },
];
