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
import { LinesInterface } from '../../../models/lines.interface';
@Component({
  selector: 'app-lines',
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
  templateUrl: './lines.component.html',
  styleUrl: './lines.component.scss',
})
export class LinesComponent {
  linesForm!: FormGroup;
  stationData: any[] = [];
  corridorData: any[] = [];
  fileName = 'Lines';
  columnsToExport = linesData;
  params: any[] = [];
  actionItems = ['update', 'delete'];
  sortCols = ['lineId', 'lineName', 'lineShortname', 'status'];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}

  linesTable: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<LinesInterface>;
  }[] = [
    {
      displayedColumns: ['lineId', 'lineName', 'lineShortname', 'status'],
      dataSource: new MatTableDataSource<LinesInterface>([
        {
          lineId: 1,
          lineName: 1101,
          lineShortname: 5,
          status: 'Active',
        },
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.corridorData = this.commonService.getCorridors();
    this.linesForm = new FormGroup({
      firstName: new FormControl(),
    });
  }

  getParameters() {
    return this.params;
  }

  onSubmit() {
    console.log(this.linesForm.value);
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.linesTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.linesTable[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}

export const linesData = ['lineId', 'lineName', 'lineShortname', 'status'];
