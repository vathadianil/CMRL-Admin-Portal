import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  transactionTypeData: any[] = [];
  equipmentData: any[] = [];

  constructor() {}

  getStationsList() {
    const stations = [
      { stationId: 1, stationName: 'Nagole' },
      { stationId: 2, stationName: 'Uppal' },
      { stationId: 3, stationName: 'Uppal Stadium' },
      { stationId: 4, stationName: 'NGRI' },
    ];
    this.stationData = stations.map(
      (station: { stationName: any; stationId: any }) => ({
        name: station.stationId + ' - ' + station.stationName,
        value: station.stationId,
      })
    );
    return this.stationData;
  }

  getTransactionTypes() {
    const transactionTypes = [
      { transactionId: '0', transactionType: 'Create Service' },
      { transactionId: '1', transactionType: 'Add Value' },
      { transactionId: '2', transactionType: 'Admin Handling' },
      { transactionId: '3', transactionType: 'Update Balance' },
      { transactionId: '4', transactionType: 'Metro-Entry' },
      { transactionId: '4', transactionType: 'Metro EXIt' },
      { transactionId: '5', transactionType: 'Void' },
    ];
    this.transactionTypeData = transactionTypes.map(
      (transaction: { transactionType: any; transactionId: any }) => ({
        name: transaction.transactionId + ' - ' + transaction.transactionType,
        value: transaction.transactionId,
      })
    );
    return this.transactionTypeData;
  }

  getEquipments() {
    const equipments = [
      { equipmentId: '1', equipmentName: 'TOM' },
      { equipmentId: '2', equipmentName: 'Entry-Gate' },
      { equipmentId: '3', equipmentName: 'Exit-Gate' },
      { equipmentId: '4', equipmentName: 'Reversable' },
    ];
    this.equipmentData = equipments.map(
      (equip: { equipmentId: any; equipmentName: any }) => ({
        name: equip.equipmentId + '-' + equip.equipmentName,
        value: equip.equipmentId,
      })
    );
    return this.equipmentData;
  }
}
