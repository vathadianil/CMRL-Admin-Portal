import { CommonModule } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export class CustomFieldErrorMatcher implements ErrorStateMatcher {
  constructor(private customControl: FormControl, private errors: any) {}

  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return (
      this.customControl &&
      this.customControl.touched &&
      (this.customControl.invalid || this.errors)
    );
  }
}

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() errors: any = null;
  @Input() hint = '';
  @Input() placeholder = '';
  @Input() disabled: boolean = true;
  inputControl: FormControl = new FormControl('');
  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  displayError = false;
  control!: FormControl;

  constructor(public injector: Injector) {}

  ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl);
    if (ngControl) {
      setTimeout(() => {
        this.control = ngControl.control as FormControl;
      });
    }
  }

  errorMatcher() {
    return new CustomFieldErrorMatcher(this.control, this.errors);
  }

  readonly errorStateMatcher: ErrorStateMatcher = {
    isErrorState: (ctrl: FormControl) => ctrl && ctrl.invalid,
  };

  writeValue(obj: string): void {
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
