import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantelFormComponent } from './plantel-form.component';

describe('PlantelFormComponent', () => {
  let component: PlantelFormComponent;
  let fixture: ComponentFixture<PlantelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
