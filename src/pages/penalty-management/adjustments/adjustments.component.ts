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
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { AdjustmentInterface } from '../../../models/Adjustments';
import { exportAdjustmentsData } from '../../export-data';
import { AdjustmentsData } from '../../sample';

@Component({
  selector: 'app-adjustments',
  standalone: true,
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
  templateUrl: './adjustments.component.html',
  styleUrl: './adjustments.component.scss',
})
export class AdjustmentsComponent {
  getIcon = getIcon;
  Adjustment!: FormGroup;
  fileName = 'Adjustments';
  actions = ['update'];
  sortCols = [
    'Param Id',
    'Adjustment Code',
    'Adjustment Name',
    'Adjustment Amount',
    'Parameter Version',
    'Status',
  ];
  columnsToExport = exportAdjustmentsData;
  params: any[] = [];

  get formParameters() {
    return this.getParameters.bind(this);
  }
  constructor(private commonService: CommonService) {}
  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<AdjustmentInterface>;
  }[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    let responseData = [];
    const response = AdjustmentsData;

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
        dataSource: new MatTableDataSource<AdjustmentInterface>(responseData),
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
