import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaFormComponent } from './escuela-form.component';

describe('EscuelaFormComponent', () => {
  let component: EscuelaFormComponent;
  let fixture: ComponentFixture<EscuelaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
