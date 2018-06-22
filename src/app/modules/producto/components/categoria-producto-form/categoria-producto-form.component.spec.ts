import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProductoFormComponent } from './categoria-producto-form.component';

describe('CategoriaProductoFormComponent', () => {
  let component: CategoriaProductoFormComponent;
  let fixture: ComponentFixture<CategoriaProductoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaProductoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
