import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'os-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleSelectionComponent {
  private _value: any[];
  @Input()
  set value( value: any[]) {
    this._value = value;
    if (this.control) { this.updateControls(); }
  }
  get value() { return this._value; }

  @Input() control: FormArray;
  @Input() list: any[];

  updateControls() {
    if (this.value) {
      this.control.controls = this.value.map(() => new FormControl());
      this.control.patchValue(this.value);
    }
  }

  constructor() {}

  onSelectionChange(event: MatSelectionListChange) {
    const optValue = event.option.value;
    this.value = event.option.selected ?
      [ ...this.value, optValue] : this.value.filter(item => item.key !== optValue.key);
  }

  isActive(item: any) {
    if (this.value) {
      return this.value.findIndex(sItem => sItem.key === item.key) >= 0;
    } else { return false; }
  }
}
