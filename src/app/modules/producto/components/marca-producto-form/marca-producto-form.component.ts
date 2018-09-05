import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Models
import { MarcaProducto } from 'app/models';
// Components
import { OSBaseFormComponent } from 'app/modules/shared';
// Services
import { DialogBoxService } from 'app/services/dialog-box.service';

@Component({
  selector: 'app-marca-producto-form',
  templateUrl: './marca-producto-form.component.html',
  styleUrls: ['./marca-producto-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarcaProductoFormComponent extends OSBaseFormComponent<MarcaProducto> {
  constructor(dialog: DialogBoxService, router: Router, route: ActivatedRoute) {
    super(dialog, router, route);
  }
}
