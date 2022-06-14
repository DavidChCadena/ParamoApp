import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoProyectoComponent } from './dialogo-proyecto.component';

describe('DialogoProyectoComponent', () => {
  let component: DialogoProyectoComponent;
  let fixture: ComponentFixture<DialogoProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
