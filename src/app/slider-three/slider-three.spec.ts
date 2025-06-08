import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderThree } from './slider-three';

describe('SliderThree', () => {
  let component: SliderThree;
  let fixture: ComponentFixture<SliderThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
