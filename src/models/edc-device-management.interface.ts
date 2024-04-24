import { Type } from "@angular/core";

export interface EdcDeviceManagementInterface {
    lineId: number;
    stationId: number;
    equipmentGroupId: number;
    equipmentId: number;
    deviceId: string;
    terminalType: string;
    terminalId: string;
    terminalIpAddress: string;
    paytmActivationCode: string;
    activeStatus: string;
    action:Type<any>
  }
  