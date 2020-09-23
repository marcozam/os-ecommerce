import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLayoutComponent } from './school-layout.component';

describe('SchoolLayoutComponent', () => {
  let component: SchoolLayoutComponent;
  let fixture: ComponentFixture<SchoolLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
