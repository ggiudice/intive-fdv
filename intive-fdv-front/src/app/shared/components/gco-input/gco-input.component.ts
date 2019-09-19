import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomForm } from './gco.helper';

@Component({
  selector: 'app-gco-input',
  templateUrl: './gco-input.component.html',
  styleUrls: ['./gco-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GcoInputComponent),
    multi: true,
  }],
})
export class GcoInputComponent implements ControlValueAccessor {

  @Input() data: CustomForm;
  value: string;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => { };

  constructor() { }

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
