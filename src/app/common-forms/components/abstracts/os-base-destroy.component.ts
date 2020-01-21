import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class OSBaseDestroyComponent implements OnDestroy {
  protected destroyed$ = new Subject<boolean>();

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
