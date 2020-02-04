import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Empresa } from 'models/general';
import { OSBaseFormComponent } from '../abstracts';

@Component({
  selector: 'os-empresa-form',
  templateUrl: './empresa-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpresaFormComponent extends OSBaseFormComponent<Empresa> {

  constructor() { super(); }
}
