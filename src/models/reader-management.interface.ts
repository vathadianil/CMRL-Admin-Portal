export interface ReaderManagementInterface {
  lineId: number;
  stationId: number;
  equipmentGroupId: number;
  equipmentId: number;
  deviceId: string;
  terminalType: string;
  terminalId: string;
  terminalIpAddress: string;
  paytmActivationCode: string;
  activeStatus: boolean;
  action: boolean;
}
