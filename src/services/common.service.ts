import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  stationDefaultValue = 'All Stations';
  stationData: any[] = [];
  transactionTypeData: any[] = [];
  equipmentData: any[] = [];
  statusData: any[] = [];
  corridorData: any[] = [];

  constructor() {}

  getStationsList() {
    const stations = [
      { stationId: 1, stationName: 'Meenambakkam Metro' },
      { stationId: 2, stationName: 'Nanganallur Road' },
      { stationId: 3, stationName: 'Alandur' },
      { stationId: 4, stationName: 'Guindy metro' },
      { stationId: 5, stationName: 'Little mount' },
      { stationId: 6, stationName: 'Saidapet metroNandanam' },
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

  getStatus() {
    const status = [
      { statusId: '1', statusName: 'Matched' },
      { statusId: '2', statusName: 'Unmatched' },
      { statusId: '3', statusName: 'Matched and Unmatched' },
      { statusId: '4', statusName: 'Excess in AFC' },
      { statusId: '5', statusName: 'Excess in PPBL' },
    ];
    this.statusData = status.map(
      (stat: { statusId: any; statusName: any }) => ({
        name: stat.statusId + '-' + stat.statusName,
        value: stat.statusId,
      })
    );
    return this.statusData;
  }

  getCorridors() {
    const corridor = [
      { corridorId: '1', corridorName: 'CORRIDOR_I' },
      { corridorId: '2', corridorName: 'CORRIDOR_II' },
      { corridorId: '3', corridorName: 'CORRIDOR_III' },
    ];
    this.corridorData = corridor.map(
      (corr: { corridorId: any; corridorName: any }) => ({
        name: corr.corridorId + '-' + corr.corridorName,
        value: corr.corridorId,
      })
    );
    return this.corridorData;
  }
}
