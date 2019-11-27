import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaTareasComponent } from './fila-tareas.component';

describe('FilaTareasComponent', () => {
  let component: FilaTareasComponent;
  let fixture: ComponentFixture<FilaTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
