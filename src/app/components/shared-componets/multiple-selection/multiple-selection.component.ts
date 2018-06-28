import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'os-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleSelectionComponent {
  @Input() list: any[];
  @Input() parent: FormGroup;
  @Input() controlName: string;

  constructor() { }

  get control(): FormArray {
    return this.parent.get(this.controlName) as FormArray;
  }

  onSelectionChange(event: MatSelectionListChange) {
    const value = event.option.value;
    if (event.option.selected) {
      this.control.push(new FormControl(value));
    } else {
      const index = this.control.value.findIndex(item => item.key === value.key);
      if (index >= 0) { this.control.removeAt(index); }
    }
  }
}
