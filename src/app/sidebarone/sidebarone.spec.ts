import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarone } from './sidebarone';

describe('Sidebarone', () => {
  let component: Sidebarone;
  let fixture: ComponentFixture<Sidebarone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
