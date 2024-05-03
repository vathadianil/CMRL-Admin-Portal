import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { CommonService } from '../../../services/common.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { TableComponent } from '../../../components/table/table.component';
import { MatTableDataSource } from '@angular/material/table';

import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';

import { EdcDeviceManagementInterface } from '../../../models/edc-device-management.interface';
import { ToggleSliderComponent } from '../../../components/toggle-slider/toggle-slider.component';

@Component({
  selector: 'app-edc-device-management-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    PagetitleComponent,
    ButtonFieldComponent,
    DropDownComponent,
    ReactiveFormsModule,
    SearchComponent,
    FabButtonFieldComponent,
    TableComponent,
    ToggleSliderComponent,
  ],
  templateUrl: './edc-device-management-page.component.html',
  styleUrl: './edc-device-management-page.component.scss',
})
export class EdcDeviceManagementPageComponent {
  edcDeviceManagemetForm!: FormGroup;

  stationData: any[] = [];
  corridorData: any[] = [];
  stationDefaultValue = 'All Stations';
  actions = ['toggle'];

  fileName = 'EDC Device Management';
  columnsToExport = edcDeviceManagementData;
  params: any[] = [];
  sortCols = [
    'lineId',
    'stationId',
    'equipmentGroupId',
    'equipmentId',
    'deviceId',
    'terminalType',
    'terminalId',
    'terminalIpAddress',
    'paytmActivationCode',
    'activeStatus',
    'actions',
  ];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  edcDeviceManagementTable: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<EdcDeviceManagementInterface>;
  }[] = [
    {
      displayedColumns: [
        'lineId',
        'stationId',
        'equipmentGroupId',
        'equipmentId',
        'deviceId',
        'terminalType',
        'terminalId',
        'terminalIpAddress',
        'paytmActivationCode',
        'activeStatus',
      ],
      dataSource: new MatTableDataSource<EdcDeviceManagementInterface>([
        {
          lineId: 1,
          stationId: 1101,
          equipmentGroupId: 5,
          equipmentId: 5012,
          deviceId: '17ED6A76',
          terminalType: 'exit',
          terminalId: '10114F',
          terminalIpAddress: '10.21.17.82',
          paytmActivationCode: '11180534',
          activeStatus: 'active',
        },

        {
          lineId: 1,
          stationId: 1101,
          equipmentGroupId: 5,
          equipmentId: 5012,
          deviceId: '17ED6A76',
          terminalType: 'exit',
          terminalId: '10114F',
          terminalIpAddress: '10.21.17.82',
          paytmActivationCode: '11180534',
          activeStatus: 'active',
        },
      ]),
    },
  ];

  // setActiveStatus(){
  //   this.edcDeviceManagementTable[0].dataSource.data.forEach(
  //     item => {
  //       item.activeStatus = item.action ? "active" : "deactive"
  //       console.log(item.activeStatus)
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.corridorData = this.commonService.getCorridors();
    this.edcDeviceManagemetForm = new FormGroup({
      corridor: new FormControl(Validators.required),
    });
  }

  getParameters() {
    this.params = [
      {
        key: 'stations',
        value: this.edcDeviceManagemetForm.get('transactionType')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.edcDeviceManagemetForm.value);
    console.log(this.edcDeviceManagementTable[0].dataSource.data);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.edcDeviceManagementTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.edcDeviceManagementTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const edcDeviceManagementData = [
  'lineId',
  'stationId',
  'equipmentGroupId',
  'equipmentId',
  'deviceId',
  'terminalType',
  'terminalId',
  'terminalIpAddress',
  'paytmActivationCode',
  'activeStatus',
  'actions',
];
