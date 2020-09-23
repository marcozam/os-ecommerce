import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloEscolarFormComponent } from './ciclo-escolar-form.component';

describe('CicloEscolarFormComponent', () => {
  let component: CicloEscolarFormComponent;
  let fixture: ComponentFixture<CicloEscolarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloEscolarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloEscolarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
