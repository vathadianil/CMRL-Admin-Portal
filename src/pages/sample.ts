export const transactionQueryData = {
  headers: [
    { key: 'transactionDateTime', label: 'Transaction Date Time' },
    { key: 'transId', label: 'Transaction ID' },
    { key: 'transType', label: 'Transaction Type' },
    { key: 'lineId', label: 'Line ID' },
    { key: 'stationId', label: 'Station ID' },
    { key: 'equipmentGroupId', label: 'Equipment Group ID' },
    { key: 'equipId', label: 'Equipment ID' },
    { key: 'acquirerId', label: 'Acquirer ID' },
    { key: 'operatorId', label: 'Operator ID' },
    { key: 'terminalId', label: 'Terminal ID' },
    { key: 'panSha', label: 'Pan Sha' },
    { key: 'serviceType', label: 'Service Type' },
    { key: 'tomEfoShiftId', label: 'Tom Efo Shift ID' },
    { key: 'paytmTid', label: 'Paytm TID' },
    { key: 'paytmMid', label: 'Paytm MID' },
    { key: 'bussinessDate', label: 'Business Date' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      transactionDateTime: '03-Feb-2611 06:50:25',
      transId: '764566834220230824025339',
      transType: '03',
      lineId: '0303-Stadium',
      stationId: '3',
      equipmentGroupId: '1143',
      equipId: '4',
      acquirerId: '6014',
      operatorId: '3030C2',
      terminalId: '3030C2',
      panSha: '••••••••••••1788',
      serviceType: '1',
      tomEfoShiftId: '0303354555',
      paytmTid: '11075316',
      paytmMid: 'LTMetr33790038971459',
      bussinessDate: '24-Aug-2023',
      status: 'Active',
    },
    {
      transactionDateTime: '03-Feb-2611 06:50:25',
      transId: '764566834220230824025349',
      transType: '04',
      lineId: '0303-Stadium',
      stationId: '3',
      equipmentGroupId: '1145',
      equipId: '2',
      acquirerId: '6013',
      operatorId: '3030C2',
      terminalId: '3030C2',
      panSha: '••••••••••••1788',
      serviceType: '1',
      tomEfoShiftId: '0303354556',
      paytmTid: '11075316',
      paytmMid: 'LTMetr33790038971459',
      bussinessDate: '23-Aug-2023',
      status: 'In-Active',
    },
  ],
};

export const cardmasterData = {
  headers: [
    { key: 'customerName', label: 'Customer Name' },
    { key: 'customerMobileNo', label: 'Customer Mobile Number' },
    { key: 'trxId', label: 'Transaction ID' },
    { key: 'trxType', label: 'Transaction Type' },
    { key: 'lineId', label: 'Line ID' },
    { key: 'stationId', label: 'Station ID' },
    { key: 'equpGrpId', label: 'Equipment Group ID' },
    { key: 'equpId', label: 'Equipment ID' },
    { key: 'aqurId', label: 'Acquirer ID' },
    { key: 'operId', label: 'Operator ID' },
    { key: 'trmId', label: 'Terminal ID' },
    { key: 'crdType', label: 'Card Type' },
    { key: 'panSha', label: 'Pan Sha' },
    { key: 'prdType', label: 'Product Type' },
    { key: 'businessDt', label: 'Business Date' },
    { key: 'trxDtTm', label: 'Transaction Date Time' },
  ],
  data: [
    {
      customerName: 'John Doe',
      customerMobileNo: '1234567890',
      trxId: 'ABC123',
      trxType: 'Purchase',
      lineId: 'Line ',
      stationId: 'Station ',
      equpGrpId: 'Group ',
      equpId: 'Equipment ',
      aqurId: 'Acquirer ',
      operId: 'Operator ',
      trmId: 'Terminal ',
      crdType: 'Credit',
      panSha: 'XXXX-XXXX-XXXX-234',
      prdType: 'Product ',
      businessDt: '2024-04-15',
      trxDtTm: '2024-04-15T10:30:00',
    },
    {
      customerName: 'Jane Smith',
      customerMobileNo: '9876543210',
      trxId: 'XYZ789',
      trxType: 'Refund',
      lineId: 'Line ',
      stationId: 'Station ',
      equpGrpId: 'Group ',
      equpId: 'Equipment ',
      aqurId: 'Acquirer ',
      operId: 'Operator ',
      trmId: 'Terminal ',
      crdType: 'Debit',
      panSha: 'XXXX-XXXX-XXXX-5678',
      prdType: 'Product ',
      businessDt: '2024-04-16',
      trxDtTm: '2024-04-16T14:45:00',
    },
  ],
};

export const stationsData = {
  headers: [
    { key: 'stationName', label: 'Station Name' },
    { key: 'shortname', label: 'Short Name' },
    { key: 'line', label: 'Line' },
    { key: 'ipAddSc', label: 'IP Address SC' },
    { key: 'ipAddCC', label: 'IP Address CC' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      stationId: 32,
      stationName: 'Meenambakkam Metro',
      shortname: 'MNB Metro',
      line: 'CORRIDOR-I',
      ipAddSc: '10.1.2.0',
      ipAddCC: '10.1.2.0',
      status: 'Active',
    },
    {
      stationId: 35,
      stationName: 'Alandur',
      shortname: 'Ald',
      line: 'CORRIDOR-II',
      ipAddSc: '10.1.9.0',
      ipAddCC: '10.1.8.0',
      status: 'In-Active',
    },
  ],
};

export const linesData = {
  headers: [
    { key: 'lineId', label: 'Line Id' },
    { key: 'lineName', label: 'Line Name' },
    { key: 'lineShortname', label: 'Line Short Name' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      lineId: 1,
      lineName: 1101,
      lineShortname: 5,
      status: 'Active',
    },
    {
      lineId: 2,
      lineName: 1100,
      lineShortname: 5,
      status: 'In-Active',
    },
  ],
};

export const usersData = {
  headers: [
    { key: 'userCode', label: 'User code' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'station', label: 'Station' },
    { key: 'line', label: 'Line' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      userCode: 11,
      name: 'Rajesh',
      role: 'Admin',
      station: 'Meenambakkam Metro',
      line: 'Carridor-I',
      status: 'In-Active',
    },
  ],
};

export const roleData = {
  headers: [
    { key: 'roleCode', label: 'Role code' },
    { key: 'roleName', label: 'Role Name' },
    { key: 'rolePrivileges', label: 'Role Privileges' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      roleCode: 111,
      roleName: 'Reports',
      rolePrivileges: 'Exit Summary Report',
      status: 'Active',
    },
  ],
};

export const privilegesData = {
  headers: [
    { key: 'privilegeCode', label: 'Privilege Code' },
    { key: 'privilegeType', label: 'Privilege Type' },
    { key: 'status', label: 'Status' },
  ],
  data: [
    {
      privilegeCode: 111,
      privilegeType: 'Monitoring',
      status: 'Active',
    },
  ],
};

export const OverStayConfigurationData = {
  headers: [
    { key: 'Same_Station_Exit', label: 'Same Station Exit' },
    { key: 'Over_Stay_Duration_From', label: 'Over Stay Duration Frome' },
    { key: 'Over_Stay_Duration_To', label: 'Over Stay Duration To' },
    { key: 'Penalty_Amount', label: 'Penalty Amount' },
  ],
  data: [
    {
      Same_Station_Exit:'No',
      Over_Stay_Duration_From: 151,
      Over_Stay_Duration_To: 211,
      Penalty_Amount: 1,
    },
    {
      Same_Station_Exit:'No',
      Over_Stay_Duration_From: 211,
      Over_Stay_Duration_To: 270,
      Penalty_Amount: 3,
    },
    {
      Same_Station_Exit:'No',
      Over_Stay_Duration_From: 271,
      Over_Stay_Duration_To: 330,
      Penalty_Amount: 4,
    },
    {
      Same_Station_Exit:'No',
      Over_Stay_Duration_From: 331,
      Over_Stay_Duration_To: 999,
      Penalty_Amount: 6,
    },
    {
      Same_Station_Exit:'No',
      Over_Stay_Duration_From: 31,
      Over_Stay_Duration_To: 90,
      Penalty_Amount: 1,
    },
    {
      Same_Station_Exit:'No',
      Over_Stay_Duration_From: 91,
      Over_Stay_Duration_To: 150,
      Penalty_Amount: 3,
    },
  ],
};