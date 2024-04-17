import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { ridershipreportInterface } from '../../../models/ridership-report-interface';
import { DateTimePickerComponent } from '../../../components/date-time-picker/date-time-picker.component';

@Component({
  selector: 'app-ridership-report',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    TableComponent,
    PagetitleComponent,
    DropDownComponent,
    ButtonFieldComponent,
    MatCardModule,
    SearchComponent,
    FabButtonFieldComponent,
    CustomInputComponent,
    MatIconModule,
    DateTimePickerComponent 
  ],
  templateUrl: './ridership-report.component.html',
  styleUrl: './ridership-report.component.scss'
})
export class RidershipReportComponent {
  ridershipReportForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];

  

  constructor(private commonService: CommonService) {}

  ridershipTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ridershipreportInterface>;
  }[] = [
    {
      displayedColumns: [
        'stationId',
        'stationName',
        'entryCount',
        'exitCount'

       
      ],
      dataSource: new MatTableDataSource<ridershipreportInterface>([
        {
          stationId:'0101',
          stationName:'miyapur',
          entryCount:0,
          exitCount:0,
        },
        
     
       
       
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.ridershipReportForm = new FormGroup({
      // firstName: new FormControl(),
      startDateTime: new FormControl(
        {
          value: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate(),
            0,
            0,
            0
          ),
          disabled: false,
        },
        Validators.required
      ),
      endDateTime: new FormControl(
        {
          value: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate(),
            23,
            59,
            59
          ),
          disabled: false,
        },
        Validators.required
      ),
    });
  }
  onSubmit() {
    console.log(this.ridershipReportForm.value);
  }
}
