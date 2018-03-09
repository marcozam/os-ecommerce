import { Component, OnInit, Input } from '@angular/core';
 import { FormControl, Validators } from '@angular/forms';
// Services
import { TipoDatoContactoService } from '../../services/tipo-dato-contacto.service';
// Models
import { TipoDatosContacto, DatoContacto } from '../../models/crm.models';
// Constants
import { emailOrEmpty } from 'app/modules/base/constants/validators.constants';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.component.html',
  styleUrls: ['./datos-contacto.component.scss'],
  providers: [TipoDatoContactoService]
})
export class DatosContactoComponent implements OnInit {

  tiposDato: TipoDatosContacto[];
  fields: { control: FormControl, value: DatoContacto}[];

  @Input() contactoID: number;
  @Input() datos: DatoContacto[];

  constructor(private _service: TipoDatoContactoService) { }

  ngOnInit() {
    this._service.source$.subscribe(list => {
      // Workarround to remove relational field
      this.tiposDato = list.filter(td => td.catalogoID === 0);
      this.loadInitialFields(this.tiposDato.filter(td => td.visible));
    });
    this._service.getList();
  }

  loadInitialFields(fields: TipoDatosContacto[]) {
    this.fields = fields.map(td => this.setField(td));
  }

  setField(tipo: TipoDatosContacto, value?: string) {
    const dc = new DatoContacto();
    dc.contactoID = this.contactoID;
    dc.tipoDatoContacto = tipo;
    // Creates Form Control
    const fc = new FormControl(value ? value : '', { updateOn: 'blur' });
    switch (tipo.validacion) {
      case 'email':
        fc.setValidators(emailOrEmpty);
        break;
      case 'tel':
        fc.setValidators(Validators.pattern('[0-9]*'));
        break;
    }
    fc.valueChanges.subscribe(value => {
      if (fc.valid) { dc.valor = value; }
    });
    return { control: fc, value: dc };
  }

  addField(tipo: TipoDatosContacto) {
    this.fields.push(this.setField(tipo));
  }
}
