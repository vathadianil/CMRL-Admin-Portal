import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { TableComponent } from '../../../components/table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { ExportService } from '../../../services/export.service';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { StationsInterface } from '../../../models/stations.interface';
@Component({
  selector: 'app-stations',
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
  ],
  templateUrl: './stations.component.html',
  styleUrl: './stations.component.scss',
})
export class StationsComponent {
  stationData: any[] = [];
  corridorData: any[] = [];
  fileName = 'Stations';
  columnsToExport = stationsData;
  params: any[] = [];
  actionItems = ['update', 'delete'];
  sortCols = [
    'stationId',
    'stationName',
    'shortname',
    'line',
    'ipAddSc',
    'ipAddCC',
    'status',
  ];

  constructor(
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  stationsTable: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<StationsInterface>;
  }[] = [
    {
      displayedColumns: [
        'stationId',
        'stationName',
        'shortname',
        'line',
        'ipAddSc',
        'ipAddCC',
        'status',
      ],
      dataSource: new MatTableDataSource<StationsInterface>([
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
      ]),
    },
  ];

  ngOnInit(): void {}

  getParameters() {
    return this.params;
  }

  onSubmit() {
    console.log();
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.stationsTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.stationsTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const stationsData = [
  'stationId',
  'stationName',
  'shortname',
  'line',
  'ipAddSc',
  'ipAddCC',
  'status',
];
