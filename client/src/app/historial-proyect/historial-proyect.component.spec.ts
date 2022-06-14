import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialProyectComponent } from './historial-proyect.component';

describe('HistorialProyectComponent', () => {
  let component: HistorialProyectComponent;
  let fixture: ComponentFixture<HistorialProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialProyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
