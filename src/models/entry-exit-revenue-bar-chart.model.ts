export interface EntryExitRevenueBarChartModel {
  title: string;
  type: string;
  bottomTitle: string;
  value: string;
  duration: string;
  xAxisLabel: string;
  yAxisLabel: string;
  style: {
    backgroundColor: string;
    color: string;
  };
  data: {
    name: string;
    value: number;
  }[];
}
