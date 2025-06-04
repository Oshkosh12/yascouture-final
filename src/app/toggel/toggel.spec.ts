import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toggel } from './toggel';

describe('Toggel', () => {
  let component: Toggel;
  let fixture: ComponentFixture<Toggel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toggel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toggel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
