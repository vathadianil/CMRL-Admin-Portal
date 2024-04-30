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
import { ReaderManagementInterface } from '../../../models/reader-management.interface';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';

@Component({
  selector: 'app-rider-management-page',
  standalone: true,
  templateUrl: './reader-management-page.component.html',
  styleUrl: './reader-management-page.component.scss',
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
    FontAwesomeModule,
  ],
})
export class ReaderManagementPageComponent implements OnInit {
  getIcon = getIcon;
  readerManagemetForm!: FormGroup;

  stationData: any[] = [];
  corridorData: any[] = [];
  stationDefaultValue = 'All Stations';

  fileName = 'Reader Management';
  columnsToExport = readerManagementData;
  params: any[] = [];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  readerManagementTable: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ReaderManagementInterface>;
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
        'action',
      ],
      dataSource: new MatTableDataSource<ReaderManagementInterface>([
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
          action: 'action-Btn',
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.corridorData = this.commonService.getCorridors();
    this.readerManagemetForm = new FormGroup({
      firstName: new FormControl(),
    });
  }

  getParameters() {
    this.params = [
      {
        key: 'stations',
        value: this.readerManagemetForm.get('transactionType')?.value,
      },
    ];
    return this.params;
  }

  onSubmit() {
    console.log(this.readerManagemetForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.readerManagementTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.readerManagementTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const readerManagementData = [
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
  'action',
];
