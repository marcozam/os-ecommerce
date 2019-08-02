import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiniquitoComponent } from './finiquito.component';

describe('FiniquitoComponent', () => {
  let component: FiniquitoComponent;
  let fixture: ComponentFixture<FiniquitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiniquitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiniquitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
