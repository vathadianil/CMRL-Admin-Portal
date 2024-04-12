import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnChanges, OnInit {
  @Output() dropdownValue: EventEmitter<any> = new EventEmitter();
  @Input() width: string = '100%';
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Placeholder';
  @Input() listData: any[] = [];
  @Input() defaultValue: any;
  @Input() control: FormControl = new FormControl('');
  @Input() isMandatory: boolean = false;
  @Input() readonly!: boolean;
  @Input() disabled = false;
  @Output()
  filteredListData: any = [];

  constructor() {}

  ngOnInit(): void {
    if (this.disabled) {
      this.control.disable();
    }
    this.filteredListData = JSON.parse(JSON.stringify(this.listData));
    this.control.valueChanges.subscribe((str) => {
      if (str) {
        this.filteredListData = this.listData.filter(
          (list: { name: string; value: string }) =>
            list.name.toLowerCase().includes(String(str)?.toLowerCase())
        );
      } else {
        this.filteredListData = JSON.parse(JSON.stringify(this.listData));
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['defaultValue'] &&
      changes['defaultValue'].currentValue !==
        changes['defaultValue'].previousValue
    ) {
      const selected = changes['defaultValue'].currentValue;
      this.control.setValue(selected);
      this.dropdownValue.emit(changes['defaultValue'].currentValue);
    }

    if (
      changes['listData'] &&
      changes['listData'].currentValue !== changes['listData'].previousValue
    ) {
      this.filteredListData = JSON.parse(JSON.stringify(this.listData));
    }

    if (changes['isMandatory'] && changes['isMandatory'].currentValue) {
      this.control.setValidators([Validators.required]);
    }

    if (changes['disabled'] && changes['disabled'].currentValue) {
      this.control.disable();
    }
  }

  onSelectionChange(event: any) {
    const selectedValue = event.option.value;
    this.dropdownValue.emit(selectedValue);
  }

  displayWith(value: any): string {
    let data: any =
      this.listData.find((list) => String(list.value) === String(value)) ||
      value;
    return data.name;
  }
}
