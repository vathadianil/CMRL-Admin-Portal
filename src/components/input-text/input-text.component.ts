import { Component, Injector, Input, forwardRef } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  NgForm,
  FormGroupDirective,
  NgControl,
  FormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  selector: 'app-input-text',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errors: any = null;
  @Input() hint = '';
  @Input() disabled: boolean = true;
  inputControl: FormControl = new FormControl('');
  //value2: string = '';
  @Input() value: string = '';
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
