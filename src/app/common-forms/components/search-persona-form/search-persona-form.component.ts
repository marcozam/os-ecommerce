import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Empresa } from 'models/general';
import { OSBaseFormComponent } from '../abstracts';

@Component({
  selector: 'os-search-persona-form',
  templateUrl: './search-persona-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPersonaFormComponent extends OSBaseFormComponent<Empresa> {

  constructor() { super(); }
}
