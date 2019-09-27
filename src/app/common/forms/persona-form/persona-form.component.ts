import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { OSBaseFormComponent } from 'app/common/components';
import { DialogBoxService } from 'app/common/services';
import { Persona } from 'models/general';

@Component({
  selector: 'os-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: [ './persona-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DialogBoxService ]
})
export class PersonaFormComponent extends OSBaseFormComponent<Persona> {

  @Input() showOptionals = true;

  constructor() { super(); }
}
