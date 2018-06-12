import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { EmailValidator } from '@angular/forms';
// Serives
import { ContactoService } from 'app/modules/crm/services/contacto.service';
// Models
import { TipoDatosContacto, Contacto } from 'app/modules/crm/models/crm.models';
import { Persona } from 'app/modules/base/models/base.models';

@Component({
  selector: 'os-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [EmailValidator]
})
export class ContactoComponent implements OnInit {

  datosContacto = { telefono: null, email: null, colonia: null };
  get isNew(): boolean { return this.contactoID ? true : false; }
  private _contactoID: number;

  @Input()
  get contactoID(): number { return this._contactoID; }
  set contactoID(value: number){
    this._contactoID = value;
    this.getContactData();
  }

  @Input() catalogName: string;
  @Input() initialData: Persona;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  contacto: Contacto;
  tiposDatosContacto: TipoDatosContacto[];
  isChildValid = false;

  constructor(
    // private _personaService: PersonasService,
    private _contactoService: ContactoService
  ) { }

  ngOnInit() {
    this.contacto = new Contacto();
  }

  getContactData() {
    if (this.contactoID) {
      this._contactoService.getByID(this.contactoID)
        .subscribe(item => {
          this.contacto = item;
          this.initialData = this.contacto.persona;

          this.datosContacto.telefono = item.datos.find(dc => dc.nombre === 'TELEFONO');
          this.datosContacto.email = item.datos.find(dc => dc.nombre === 'EMAIL');
          this.datosContacto.colonia = item.datos.find(dc => dc.nombre === 'LOCALIDAD');
        });
    }
  }

  onPersonaChanged(event) {
    this.isChildValid = event.isValid;
    if (this.isChildValid) { this.contacto.persona = event.data; }
  }

  cancel() { this.onCancel.emit(); }

  onSave() {
    // TODO: Add contact type
    this.contacto.tipoID = 1;
    // this.contacto.datos = datos;

    // ADD Store here
    /*
    this._personaService.save(this.contacto.persona)
      .subscribe((pRes: Persona) => {
        this.contacto.persona = pRes;
        this._contactoService.save(this.contacto)
          .subscribe((cRes) => this.onSaved(cRes));
      });
      */
  }

  onSaved(data: Contacto) { this.onChange.emit({ Data: data, isNew: this.isNew }); }
}
