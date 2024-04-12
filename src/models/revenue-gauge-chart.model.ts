export interface RevenueGaugeChartModel {
  type: string;
  title: string;
  total: string;
  style: {
    titleColor: string;
    totalTextBackgroundColor: string;
    totalTextColor: string;
  };
  data: {
    name: string;
    value: number;
    displayValue: string;
    style: {
      color: string;
    };
  }[];
}
