import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { getIcon } from '../../../util/font-awesome-icons';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { FabButtonFieldComponent } from "../../../components/fab-button-field/fab-button-field.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { SearchComponent } from '../../../components/search/search.component';
import { TableComponent } from '../../../components/table/table.component';
import { ExportPdfService } from '../../../services/export-pdf.service';
import { FormControl, } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { ExportService } from '../../../services/export.service';
import { MatTableDataSource } from '@angular/material/table';
import { exportSurcharge } from '../../export-data';
import { SurchargeData } from '../../sample';
import { SurchargeInterface } from '../../../models/Surcharge';
@Component({
  selector: 'app-surcharge',
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
   
  ],
  templateUrl: './surcharge.component.html',
  styleUrl: './surcharge.component.scss'
})
export class SurchargeComponent {
  getIcon=getIcon
  Surcharge!: FormGroup;
  fileName = 'Surcharge';
  actions = ['update']
  sortCols = [];
  columnsToExport = exportSurcharge;
  params: any[] = [];

  constructor(
    private commonService: CommonService,
    private exportService: ExportService,
    private exportPdfService: ExportPdfService
  ) {}
  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<SurchargeInterface>;
  }[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  

  getTableData() {
    let responseData = [];
    const response =SurchargeData;

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
        dataSource: new MatTableDataSource<SurchargeInterface>(responseData),
      },
    ];
  }

  
  getParameters() {
    return this.params;
  }


  onSubmit() {
    console.log();
  }



  onExcelClicked() {
    this.exportService.exportToExcel(
      this. myTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this. myTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

}
