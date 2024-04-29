import { CommonModule } from '@angular/common';
import { Component , Inject,} from '@angular/core';
import {MatDialog, MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';
import { TableComponent } from "../table/table.component";
import { MatTableDataSource } from '@angular/material/table';
import { InputTextComponent } from "../input-text/input-text.component";

@Component({
    selector: 'app-report-dailog',
    standalone: true,
    templateUrl: './report-dailog.component.html',
    styleUrl: './report-dailog.component.scss',
    imports: [MatCardModule, TableComponent, InputTextComponent,CommonModule]
})
export class ReportDailogComponent {
Object: any;

  constructor(public dialogRef: MatDialogRef<ReportDailogComponent>,@Inject(MAT_DIALOG_DATA) public tableData: any) {
    
  }

  
  getDisplayedColumns(): string[] {
    if (this.tableData && this.tableData.length > 0 && this.tableData[0].dataSource.data.length > 0) {
      return Object.keys(this.tableData[0].dataSource.data[0]);
    }
    return [];
  }
   

  data = [{
    displayedColumns : this.getDisplayedColumns(),
    dataSource : new MatTableDataSource<any>([this.tableData])
  }]

  btnClick(){
    console.log(this.data)
  }



  
}
