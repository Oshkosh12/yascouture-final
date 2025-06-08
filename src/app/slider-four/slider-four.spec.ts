import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFour } from './slider-four';

describe('SliderFour', () => {
  let component: SliderFour;
  let fixture: ComponentFixture<SliderFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
