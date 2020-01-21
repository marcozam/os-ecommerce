import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// RxJs
import { Observable } from 'rxjs';
// NgRx
import { Store } from '@ngrx/store';
import { SearchContactoAction } from 'store';
// Services
import { ContactoService } from 'services/http/crm';
// Models
import { Contacto } from 'models/crm';
import { Persona } from 'models/general';

@Component({
  selector: 'app-search-persona',
  templateUrl: './search-persona.component.html',
  styleUrls: ['./search-persona.component.scss'],
})
export class SearchPersonaComponent implements OnInit {

  resultados: Contacto[] = [];
  _contacto: Contacto;
  contactoID: number;
  loading$: Observable<boolean>;
  isLoading = false;
  triggerSearch = false;
  showAdd = false;

  @Input() catalogName: string;
  @Output() onChange = new EventEmitter<any>();

  constructor(
    private contactoService: ContactoService,
    private store$: Store<any>) { }

  ngOnInit() { }

  onSearch(_nombre: string) {
    _nombre = _nombre.trim();
    const _names = _nombre.split(',');
    if (_names.length >= 2) {
      const [ nombre, apellido ] = _names;
      this.store$.dispatch(SearchContactoAction({ payload: { nombre, apellido } }));
      // this.isLoading = true;
      this.contactoService.getPersonaByName(_names[1], _names[0])
        .subscribe(data => this.resultados = data);
      this.triggerSearch = true;
    }
  }

  onItemSelected(item: Contacto) {
    this.onChange.emit({data: item, exist: true});
  }

  onViewContactClick(item: Contacto) {
    this.contactoID = item.key;
    this.showAdd = true;
  }

  onAddClick(_nombre: string) {
    if (!_nombre) {
      _nombre = ',';
    }
    const _names = _nombre.split(',');
    const $persona = new Persona();
    $persona.nombre = _names[0].trim();
    $persona.apellidoPaterno = _names[1].trim();
    this.showAdd = true;
    this._contacto = new Contacto();
    this._contacto.persona = $persona;
  }

  personaAdded(data: any) {
    this.showAdd = false;
    this.onChange.emit({data: data.Data, exist: data.isNew});
  }
}
