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
import { linesData } from '../../sample';
import { exportLinesData } from '../../export-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
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
    FontAwesomeModule,
  ],
  templateUrl: './lines.component.html',
  styleUrl: './lines.component.scss',
})
export class LinesComponent {
  getIcon = getIcon;
  stationData: any[] = [];
  corridorData: any[] = [];
  fileName = 'Lines';
  columnsToExport = exportLinesData;
  params: any[] = [];
  actionItems = ['update'];
  sortCols = ['lineId', 'lineName', 'lineShortname', 'status'];

  get formParameters() {
    return this.getParameters.bind(this);
  }

  constructor() {}

  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    let responseData = [];
    const response = linesData;

    response.data.map((item) => {
      let dataList = {};
      response.headers.map((header) => {
        dataList = { ...dataList, [header.label]: item[header.key] };
      });
      responseData.push(dataList);
    });

    this.sortCols = response.headers.map((header: any) => header.label);
    this.myTableData = [
      {
        displayedColumns: response.headers.map((header: any) => header.label),
        dataSource: new MatTableDataSource<any>(responseData),
      },
    ];
  }
  getParameters() {
    return this.params;
  }

  onSubmit() {
    console.log();
  }
}
