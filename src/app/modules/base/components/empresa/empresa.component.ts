import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
// Services
import { EmpresasService } from '../../services/empresa.service';
// Models
import { Empresa } from '../../models/base.models';

@Component({
  selector: 'os-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  empresa: Empresa;

  @ViewChild('formEmpresa') form: NgForm;

  @Input() ID: number;
  @Input() catalogName: string;
  @Input() isContact = true;

  @Output() onChange: EventEmitter<{data: Empresa, isValid: boolean}> = new EventEmitter();

  constructor(private _service: EmpresasService) {
    this.empresa = new Empresa();
    this.catalogName = '';
  }

  ngOnInit() {
    if (this.ID) {
      this._service.getByID(this.ID).subscribe((data: Empresa) => this.empresa = data);
    }
    this.form.valueChanges.subscribe((val) => {
      this.onChange.emit({
        isValid: this.form.valid,
        data: Object.assign(this.empresa, val)
      });
    });
  }
}
