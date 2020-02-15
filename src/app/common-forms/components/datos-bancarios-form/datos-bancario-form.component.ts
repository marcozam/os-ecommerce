import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Persona } from 'models/general';
import { OSBaseFormComponent } from '../abstracts';

@Component({
  selector: 'os-datos-bancarios-form',
  templateUrl: './datos-bancario-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatosBancariosFormComponent extends OSBaseFormComponent<Persona> {

  constructor() {
    super();
  }
}
