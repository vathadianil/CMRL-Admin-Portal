export interface CardSalePercentagePieChartModel {
  type: string;
  title: string;
  percentage: string;
  isAdvancedChart: boolean;
  style: {
    titleColor: string;
  };
  data: {
    name: string;
    value: number;
    style: {
      color: string;
    };
  }[];
}
