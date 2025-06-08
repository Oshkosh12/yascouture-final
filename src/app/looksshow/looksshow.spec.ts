import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Looksshow } from './looksshow';

describe('Looksshow', () => {
  let component: Looksshow;
  let fixture: ComponentFixture<Looksshow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Looksshow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Looksshow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
