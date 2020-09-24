import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-layout',
  templateUrl: './school-layout.component.html',
  styleUrls: ['./school-layout.component.scss']
})
export class SchoolLayoutComponent implements OnInit {

  title = 'Inscripcion';
  plantelSeleccionado: any;

  constructor() { }

  ngOnInit() {
  }

}
