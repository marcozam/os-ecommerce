import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  host: {
    'class': 'text-center loading'
  }
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
