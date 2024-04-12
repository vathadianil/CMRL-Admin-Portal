export interface MerchantWiseRevenueChartModel {
  title: string;
  type: string;
  data: {
    name: string;
    image: string;
    value: number;
    displayValue: string;
    style: {
      backgroundColor: string;
      color: string;
    };
  }[];
}
