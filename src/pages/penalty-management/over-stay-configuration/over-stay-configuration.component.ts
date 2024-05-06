import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { getIcon } from '../../../util/font-awesome-icons';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchComponent } from '../../../components/search/search.component';
import { TableComponent } from '../../../components/table/table.component';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { ExportService } from '../../../services/export.service';
import { MatTableDataSource } from '@angular/material/table';
import { OverStayConfigurationInterface } from '../../../models/OverStayConfigurationInterface';
import { OverStayConfigurationData } from '../../sample';
import { exportOverStayConfigurationData } from '../../export-data';

@Component({
  selector: 'app-over-stay-configuration',
  standalone: true,
  templateUrl: './over-stay-configuration.component.html',
  styleUrl: './over-stay-configuration.component.scss',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FontAwesomeModule,
    PagetitleComponent,
    ButtonFieldComponent,
    FabButtonFieldComponent,
    MatTooltipModule,
    SearchComponent,
    TableComponent,
    ReactiveFormsModule,
  ],
})
export class OverStayConfigurationComponent {
  getIcon = getIcon;
  OverStayConfigurationForm!: FormGroup;
  actions = ['update'];
  sortCols = [
    'Same_Station_Exit',
    'Over_Stay_Duration_From',
    'Over_Stay_Duration_To',
    'Penalty_Amount',
  ];

  fileName = 'Over Stay Configuration';
  columnsToExport = exportOverStayConfigurationData;
  params: any[] = [];

  get formParameters() {
    return this.getParameters.bind(this);
  }
  constructor(private commonService: CommonService) {}
  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<OverStayConfigurationInterface>;
  }[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    let responseData = [];
    const response = OverStayConfigurationData;

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
        dataSource: new MatTableDataSource<OverStayConfigurationInterface>(
          responseData
        ),
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
