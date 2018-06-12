import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaProductoFormComponent } from './marca-producto-form.component';

describe('MarcaProductoFormComponent', () => {
  let component: MarcaProductoFormComponent;
  let fixture: ComponentFixture<MarcaProductoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaProductoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
