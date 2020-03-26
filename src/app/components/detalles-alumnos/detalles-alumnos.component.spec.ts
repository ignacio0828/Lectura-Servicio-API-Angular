import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAlumnosComponent } from './detalles-alumnos.component';

describe('DetallesAlumnosComponent', () => {
  let component: DetallesAlumnosComponent;
  let fixture: ComponentFixture<DetallesAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
