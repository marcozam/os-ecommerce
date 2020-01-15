import { Component, OnInit } from '@angular/core';


import { OSPeriodo } from 'app/common/models';
import { periodos } from 'app/common/constants';

@Component({
  selector: 'os-date-selection',
  templateUrl: './date-selection.component.html',
  styleUrls: ['./date-selection.component.scss']
})
export class DateSelectionComponent implements OnInit {

  _periodos: OSPeriodo[];

  constructor() { }

  ngOnInit() {
    this._periodos = periodos;
  }

}
