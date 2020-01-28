import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Persona } from 'models/general';
import { OSBaseFormComponent } from '../abstracts';

@Component({
  selector: 'os-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: [ './persona-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonaFormComponent extends OSBaseFormComponent<Persona> {

  @Input() showOptionals = false;

  constructor() { super(); }
}
