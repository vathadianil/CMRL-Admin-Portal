import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogClose,
} from '@angular/material/dialog';
import { InputTextComponent } from '../input-text/input-text.component';
import { ButtonFieldComponent } from '../button-field/button-field.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-view-model-popup',
  standalone: true,
  templateUrl: './view-model-popup.component.html',
  styleUrl: './view-model-popup.component.scss',
  imports: [
    InputTextComponent,
    CommonModule,
    MatDialogModule,
    ButtonFieldComponent,
    MatTableModule,
  ],
})
export class ViewModelPopupComponent {
  @Input() viewData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;
  }[];

  constructor(
    public dialogRef: MatDialogRef<ViewModelPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public tableData: any
  ) {}


  // keys =  Object.keys(this.tableData)

  displayedColumns = Object.keys(this.tableData)
  dataSource = this.tableData

  // getDisplayedColumns() {
  //   if (
  //     this.tableData &&
  //     this.tableData.length > 0 &&
  //     this.tableData[0].dataSource.data.length > 0
  //   ) {
  //     return Object.keys(this.tableData[0].dataSource.data[0]);
  //   }
  //   return [];
  // }

  // data = [
  //   {
  //     displayedColumns : this.getDisplayedColumns(),
  //     dataSource: new MatTableDataSource<any>([this.tableData]),
  //   },
  // ];

  btnClick() {
    console.log(this.tableData);
    // console.log(this.data)
  }
}
