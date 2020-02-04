import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// Angular Material
import { MatDialog } from '@angular/material/dialog';
// NgRx
import { Store } from '@ngrx/store';
import * as fromStore from 'store/crm';
// Common Forms
import { SEARCH_PERSONA_FORM } from 'app/common-forms';
// Components
import { ContactoComponent } from '../contacto/contacto.component';
import { ContactoFormComponent } from '../contacto-form/contacto-form.component';
import { DialogActionsComponent } from '../dialog-actions/dialog-actions.component';
// Models
import { Contacto } from 'models/crm';
import { Persona } from 'models/general';

@Component({
  selector: 'app-search-persona',
  templateUrl: './search-persona.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPersonaComponent implements OnInit {

  contacto: Contacto;
  searchForm: FormGroup;
  searchTriggered: boolean;
  resultados$ = this.store$.select(fromStore.selectAllSearchContactos);

  @Output() onChange = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private store$: Store<fromStore.CRMModuleState>) { }

  ngOnInit() {
    this.searchForm = this.fb.group(SEARCH_PERSONA_FORM());
    this.searchTriggered = false;
  }

  private splitNames(value: string): { nombre: string; apellido: string } {
    const names = value.trim().split(',');
    if (names.length >= 2) {
      const [ nombre, apellido ] = names;
      return { nombre, apellido };
    }
    return null;
  }

  search({ nombre }) {
    const payload = this.splitNames(nombre);
    if (payload) {
      this.searchTriggered = true;
      this.store$.dispatch(fromStore.SearchContactoAction({ payload }));
    }
  }

  onItemSelected(contacto: Contacto) {
    if (contacto.key === 0) {
      // this._contactoService.save(item.data).subscribe((data: Contacto) => this.checkData(data));
    } else {
      this.checkData(Contacto);
    }
  }

  onAddClick(nombres: string) {
    const { nombre, apellido } = this.splitNames(nombres || ',');
    const persona = new Persona(nombre, apellido);
    this.contacto = new Contacto();
    this.contacto.persona = persona;
  }

  personaAdded(contacto: any) {
    // this.onChange.emit({data: data.Data, exist: data.isNew});
  }

  checkData(contacto: Contacto) {
    /*
    this._ventaService.getOrdenesPendientesEntrega(0, _contacto.key)
      .subscribe(result => {
        this.ordenesPendientes = result;*/
        this.openDialog(contacto);
        /*
      });
    */
  }

  openContactDialog(contacto: Contacto) {
    const { key: payload } = contacto;
    this.store$.dispatch(fromStore.SelectContactoAction({ payload }));
    this.dialog.open(ContactoComponent);
  }

  openDialog(contacto: Contacto) {
    const { key, nombre } = contacto;
    const actions = [
      { name: 'Realizar examen', route: `/optika/examen/${key}` },
      { name: 'Generar venta', route: `/optika/venta/${key}` },
      /*{ name: 'Historial de Compra', route: '/crm/historial/' + _contacto.key },*/
    ];

    /*
    if (this.ordenesPendientes.length > 0) {
      _actions.push({ name: `Ordenes por Entregar (${this.ordenesPendientes.length})`, route: '/caja/entregas/' + _contacto.key });
    } */

    const dialogRef = this.dialog.open(DialogActionsComponent, {
      data: { actions, title: nombre }
    });

    /*
    if (_onClose) {
      dialogRef.afterClosed().subscribe(result => { _onClose(result); });
    }
    */
  }
}
