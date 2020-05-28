import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Input,
  Output,
  ViewChild,
  Component,
  ElementRef,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
// Material
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
// RxJs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'os-tokenizer',
  templateUrl: './tokenizer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenizerComponent {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tokenCtrl = new FormControl();
  filteredTokens$: Observable<string[]>;

  @Input() selectable = true;
  @Input() removable = true;
  @Input() tokens: string[];
  @Input() allTokens: string[];
  @Output() tokensChange: EventEmitter<string[]> = new EventEmitter();

  @ViewChild('tokenInput', { static: true }) tokenInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: true }) matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredTokens$ = this.tokenCtrl.valueChanges.pipe(
        startWith(null),
        map((token: string | null) => token ? this.filter(token) : this.allTokens.slice()));
  }

  add(event: MatChipInputEvent): void {
    const { input, value } = event;
    // TODO: Avoid duplicates
    // Add our token
    if ((value || '').trim()) {
      this.tokens.push(value.trim());
      this.tokensChange.emit(this.tokens);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.tokenCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.tokens.indexOf(fruit);
    if (index >= 0) {
      this.tokens.splice(index, 1);
      this.tokensChange.emit(this.tokens);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tokens.push(event.option.viewValue);
    this.tokenInput.nativeElement.value = '';
    this.tokenCtrl.setValue(null);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTokens.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
