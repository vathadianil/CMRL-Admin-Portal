import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { TableComponent } from '../table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { InputTextComponent } from '../input-text/input-text.component';
import { ButtonFieldComponent } from '../button-field/button-field.component';

@Component({
  selector: 'app-model-popup',
  standalone: true,
  templateUrl: './model-popup.component.html',
  styleUrl: './model-popup.component.scss',
  imports: [
    TableComponent,
    InputTextComponent,
    CommonModule,
    MatDialogModule,
    ButtonFieldComponent,
  ],
})
export class ModelPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<ModelPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public tableData: any
  ) {}

  btnClick() {
    console.log('table: ', this.tableData);
  }
}
