import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidertwo } from './slidertwo';

describe('Slidertwo', () => {
  let component: Slidertwo;
  let fixture: ComponentFixture<Slidertwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slidertwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slidertwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
