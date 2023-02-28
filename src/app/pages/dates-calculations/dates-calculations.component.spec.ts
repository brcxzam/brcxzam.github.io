import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesCalculationsComponent } from './dates-calculations.component';

describe('DatesCalculationsComponent', () => {
  let component: DatesCalculationsComponent;
  let fixture: ComponentFixture<DatesCalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesCalculationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
