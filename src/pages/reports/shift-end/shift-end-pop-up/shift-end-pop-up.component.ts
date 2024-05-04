import { Component, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { getIcon } from '../../../../util/font-awesome-icons';
import { ExportService } from '../../../../services/export.service';
import { ExportPdfService } from '../../../../services/export-pdf.service';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogClose,
} from '@angular/material/dialog';
import { FabButtonFieldComponent } from '../../../../components/fab-button-field/fab-button-field.component';
import { ShiftEndTableComponent } from '../../../../components/shift-end-table/shift-end-table.component';

@Component({
  selector: 'app-shift-end-pop-up',
  standalone: true,
  templateUrl: './shift-end-pop-up.component.html',
  styleUrl: './shift-end-pop-up.component.scss',
  imports: [FontAwesomeModule, FabButtonFieldComponent, ShiftEndTableComponent],
  providers: [HttpClientModule],
})
export class ShiftEndPopUpComponent {
  getIcon = getIcon;

  constructor(
    public dialogRef: MatDialogRef<ShiftEndPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public tableData: any
  ) {}
}
