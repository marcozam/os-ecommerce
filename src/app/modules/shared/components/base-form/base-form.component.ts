import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'os-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss'],
})
export class BaseFormComponent implements OnInit {
  @Input() loading$: Observable<boolean>;
  constructor() { }
  ngOnInit() { }
}
