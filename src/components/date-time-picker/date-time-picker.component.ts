import { Component, Input } from '@angular/core';
import {
  NGX_MAT_DATE_FORMATS,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { CUSTOM_DATE_FORMATS } from '../../util/date-picker-format';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateTimePickerComponent,
      multi: true,
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss',
})
export class DateTimePickerComponent implements ControlValueAccessor {
  disabled = false;
  @Input() label = '';
  @Input() showSpinners = true;
  @Input() enableMeridian = false;
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
  value: Date = null;
  onChange: any = (value: Date) => {};
  onTouched: any = () => {};
  displayError = false;

  writeValue(obj: Date): void {
    this.value = obj;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
    this.disabled = isDisabled;
  }
}
