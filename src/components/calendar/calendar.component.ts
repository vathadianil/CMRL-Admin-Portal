import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnChanges, OnInit {
  /**
   * form object to hold the form data
   */
  form!: FormGroup;

  /**
   * Hold the current Date;
   */
  date!: Date;

  /**
   * Pre-selected date
   */
  @Input()
  selected!: Date;

  /**
   * minimum date value
   */
  @Input()
  min!: Date;

  /**
   * maximum date value
   */
  @Input()
  max!: Date;

  /**
   * Month at which the calendar should start
   */
  @Input()
  startAt: Date = new Date();

  /**
   * Emit event on date select
   */
  @Output()
  dateChange: EventEmitter<any> = new EventEmitter();

  @Input()
  type: string = 'start';

  constructor() {}

  /**
   * Detect changes to input variables
   * @param changes changes object that contains all the input property change
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['min'] &&
      changes['min'].currentValue !== changes['min'].previousValue
    ) {
      this.min = changes['min'].currentValue;
    }
    if (
      changes['max'] &&
      changes['max'].currentValue !== changes['max'].previousValue
    ) {
      this.max = changes['max'].currentValue;
    }
  }

  ngOnInit(): void {
    this.startAt = this.selected || new Date();
    if (!this.selected) {
      if (this.type === 'end') {
        this.startAt.setHours(23, 59, 59, 0);
      } else {
        this.startAt.setHours(0, 0, 0, 0);
      }
    }
    this.onSelect(this.startAt);
  }

  onSelect(event: Date): void {
    this.date = event;
    this.emitSelected(this.date);
  }

  emitSelected(dateValue: Date): void {
    this.dateChange.emit(dateValue);
  }
}
