import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'os-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'text-center loading'
  }
})
export class LoadingComponent {
  @Input() loading: boolean;
  constructor() { }
}
