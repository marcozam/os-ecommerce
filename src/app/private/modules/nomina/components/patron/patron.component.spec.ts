/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PatronComponent } from './patron.component';

describe('PatronComponent', () => {
  let component: PatronComponent;
  let fixture: ComponentFixture<PatronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
