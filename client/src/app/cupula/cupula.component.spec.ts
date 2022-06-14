import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupulaComponent } from './cupula.component';

describe('CupulaComponent', () => {
  let component: CupulaComponent;
  let fixture: ComponentFixture<CupulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CupulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
