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
import { exportUsersData } from '../../export-data';
import { usersData } from '../../sample';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../util/font-awesome-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-users',
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
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  getIcon = getIcon;
  userData: any[] = [];
  fileName = 'Users';
  columnsToExport = exportUsersData;
  params: any[] = [];
  actionItems = ['update'];
  sortCols = ['User code', 'Name', 'Role', 'Station', 'Line', 'Status'];

  constructor(
    private exportService: ExportService,
    private exportPdfService: ExportPdfService,
    private dialog: MatDialog
  ) {}

  myTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[] = [];

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    let responseData = [];
    const response = usersData;

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

  addUser() {
    const dialogRef = this.dialog.open(AddEditUserComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'added') {
      }
    });
  }

  actionClicked(data: any) {
    let action = data?.action;
    switch (action) {
      case 'update':
        this.editUser(data);
        break;
    }
  }
  editUser(data: any) {
    const dialogRef = this.dialog.open(AddEditUserComponent, { data });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'update') {
        //this.getUserData();
      }
    });
  }

  onExcelClicked() {
    this.exportService.exportToExcel(
      this.myTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }

  onPdfClicked() {
    this.exportPdfService.exportToPDF(
      this.myTableData[0].dataSource.data,
      this.fileName,
      this.columnsToExport,
      this.getParameters()
    );
  }
}
