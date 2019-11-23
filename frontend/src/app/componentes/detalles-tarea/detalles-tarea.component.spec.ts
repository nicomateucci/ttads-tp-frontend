import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTareaComponent } from './detalles-tarea.component';

describe('DetallesTareaComponent', () => {
  let component: DetallesTareaComponent;
  let fixture: ComponentFixture<DetallesTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
