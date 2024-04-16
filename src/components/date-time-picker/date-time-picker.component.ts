import { Component, Input } from '@angular/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss',
})
export class DateTimePickerComponent {
  @Input() disabled = false;
  @Input() showSpinners = true;
  @Input() enableMeridian = true;
  @Input() stepHour = 1;
  @Input() stepMinute = 1;
  @Input() stepSecond = 1;
  @Input() disableMinute = false;
  @Input() hideTime = false;
  @Input() touchUi = false;
  @Input() showSeconds = true;
  @Input() minDate: moment.Moment;
  @Input() maxDate: moment.Moment;
  @Input() color: ThemePalette = 'primary';
  public formGroup = new FormGroup({
    dateControl: new FormControl(
      { value: new Date(), disabled: this.disabled },
      [Validators.required]
    ),
  });
  dateControl = new FormControl(new Date());
}
