import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-graph-detail-dialog',
  standalone: true,
  imports: [],
  templateUrl: './graph-detail-dialog.component.html',
  styleUrl: './graph-detail-dialog.component.scss',
})
export class GraphDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(JSON.stringify(data));
  }
}
